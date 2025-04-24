
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PaymentGateway from './PaymentGateway';

interface PaymentModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  amount: number;
  courseName: string;
  onPaymentSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  isOpen, 
  setIsOpen, 
  amount, 
  courseName, 
  onPaymentSuccess 
}) => {
  const handleSuccess = () => {
    setIsOpen(false);
    onPaymentSuccess();
  };
  
  const handleCancel = () => {
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Course Enrollment</DialogTitle>
          <DialogDescription>
            Complete your payment to get access to this course.
          </DialogDescription>
        </DialogHeader>
        
        <PaymentGateway 
          amount={amount} 
          courseName={courseName}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
