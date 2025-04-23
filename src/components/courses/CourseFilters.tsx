
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';

interface CourseFiltersProps {
  categories: string[];
  levels: string[];
}

const CourseFilters = ({ categories, levels }: CourseFiltersProps) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm sticky top-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-medium text-lg">Filters</h3>
        <Filter className="h-4 w-4 text-gray-500" />
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-3 text-gray-700">Categories</h4>
        <div className="space-y-2">
          {categories.map((category, i) => (
            <div key={i} className="flex items-center">
              <input 
                type="radio" 
                id={`category-${i}`} 
                name="category"
                defaultChecked={i === 0}
                className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
              />
              <label htmlFor={`category-${i}`} className="ml-2 text-sm text-gray-600">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-3 text-gray-700">Difficulty Level</h4>
        <div className="space-y-2">
          {levels.map((level, i) => (
            <div key={i} className="flex items-center">
              <input 
                type="radio" 
                id={`level-${i}`} 
                name="level"
                defaultChecked={i === 0}
                className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
              />
              <label htmlFor={`level-${i}`} className="ml-2 text-sm text-gray-600">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-sm mb-3 text-gray-700">Duration</h4>
        <div className="space-y-2">
          {["Any Duration", "1-4 weeks", "5-8 weeks", "9-12 weeks", "12+ weeks"].map((duration, i) => (
            <div key={i} className="flex items-center">
              <input 
                type="radio" 
                id={`duration-${i}`} 
                name="duration"
                defaultChecked={i === 0}
                className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
              />
              <label htmlFor={`duration-${i}`} className="ml-2 text-sm text-gray-600">
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Button className="w-full mt-6 bg-gujarat-blue hover:bg-blue-700">
        Apply Filters
      </Button>
    </div>
  );
};

export default CourseFilters;
