// src/components/ui/Alert.js
import React from 'react';

const Alert = ({ children, variant = 'info', className = '' }) => {
  const alertClasses = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${alertClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Alert;
