import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container flex justify-center items-center h-screen bg-gray-900">
      <div className="loader-spinner animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
    </div>
  );
};

export default Loader;
