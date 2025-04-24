
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaymentGatewayProps {
  amount: number;
  courseName: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ 
  amount, 
  courseName, 
  onSuccess, 
  onCancel 
}) => {
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: t('payment.success'),
        description: t('payment.successMessage'),
        variant: "default",
      });
      
      onSuccess();
    }, 2000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{t('payment.title')}</CardTitle>
        <CardDescription>{courseName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-center">
          ₹{amount.toFixed(2)}
        </div>
        
        <Separator />
        
        <div className="space-y-3">
          <Label>{t('payment.method')}</Label>
          <RadioGroup 
            defaultValue={paymentMethod}
            onValueChange={setPaymentMethod}
          >
            <div className="flex items-center space-x-2 border rounded-md p-3">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                {t('payment.creditCard')}
              </Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-3">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi">{t('payment.upi')}</Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-3">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking">{t('payment.netBanking')}</Label>
            </div>
          </RadioGroup>
        </div>
        
        {paymentMethod === 'card' && (
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="cardNumber">{t('payment.cardNumber')}</Label>
              <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="expiry">{t('payment.expiry')}</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cvc">{t('payment.cvc')}</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </div>
        )}
        
        {paymentMethod === 'upi' && (
          <div className="space-y-1">
            <Label htmlFor="upiId">{t('payment.upiId')}</Label>
            <Input id="upiId" placeholder="name@bank" />
          </div>
        )}
        
        {paymentMethod === 'netbanking' && (
          <div className="space-y-1">
            <Label htmlFor="bank">{t('payment.selectBank')}</Label>
            <select 
              id="bank" 
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">-- Select Bank --</option>
              <option value="sbi">State Bank of India</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
              <option value="axis">Axis Bank</option>
            </select>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          className="w-full bg-gujarat-blue hover:bg-blue-700"
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('payment.processing')}
            </span>
          ) : (
            <span>{t('payment.payNow')}</span>
          )}
        </Button>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={onCancel}
        >
          {t('payment.cancel')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentGateway;
