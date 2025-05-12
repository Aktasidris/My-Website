import React from 'react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg text-center">
      {message}
    </div>
  );
};

export default Error;
