import React from 'react';
import View from '../components/View';

const ViewPage = ({ setFormValues }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          View Reviews
        </h2>

        {/* View Component */}
        <View setFormValues={setFormValues} />
      </div>
    </div>
  );
};

export default ViewPage;
