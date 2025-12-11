import React from 'react';
export default function PlanCard({plan}){ return (
  <div style={{border:'1px solid #ddd',padding:10,margin:8}}>
    <h3>₹{plan.price} — {plan.type}</h3>
    <p>{plan.data} • {plan.validity}</p>
    <p>{plan.description}</p>
    <button>Select</button>
  </div>
);}