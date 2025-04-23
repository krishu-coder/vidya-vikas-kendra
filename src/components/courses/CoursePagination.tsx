
import React from 'react';
import { Button } from "@/components/ui/button";

const CoursePagination = () => {
  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled className="text-gray-400">Previous</Button>
        {[1, 2, 3].map((page) => (
          <Button 
            key={page} 
            variant={page === 1 ? "default" : "outline"} 
            size="sm"
            className={page === 1 ? "bg-gujarat-blue hover:bg-blue-700" : ""}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" size="sm" className="hover:bg-gray-100 hover:text-gray-900">Next</Button>
      </nav>
    </div>
  );
};

export default CoursePagination;
