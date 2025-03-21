import React from 'react';

const Details = () => {
    // Sample data (replace with dynamic data if available)
    const sellerName = 'Abdul Jabbar Al Nahid';
    const startTime = '19 Mar 2025 09:00';
    const expectedTime = '19 Mar 2025 15:00';
    const description = `
    This order is currently in the delivery process, tracked through the following stages: 
    Ready to Deliver, Accepting Deliveries, Ready to Deliver, Delivery, and Return. 
    The package is expected to reach you by ${expectedTime}. For any updates, 
    refer to the tracking timeline or contact the seller.
  `;

    return (
        <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Details</h3>
            <div className="space-y-3">
                <p className="text-sm text-gray-700">
                    <strong>Seller Name:</strong> {sellerName}
                </p>
                <p className="text-sm text-gray-700">
                    <strong>Start Time:</strong> {startTime}
                </p>
                <p className="text-sm text-gray-700">
                    <strong>Expected Time:</strong> {expectedTime}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>Description:</strong> <br />
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Details;
