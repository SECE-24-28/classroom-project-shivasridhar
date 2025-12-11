import React from 'react';
export default function ExampleCard({title, price, validity}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">₹{price} • {validity}</p>
    </div>
  );
}