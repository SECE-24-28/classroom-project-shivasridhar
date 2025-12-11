import React from 'react';
import PlanCard from '../components/PlanCard';
export default function RechargePlans(){
  const demo = [{id:1,price:199,type:'prepaid',validity:'28 days',data:'1.5GB/day',description:'Unlimited calls'}];
  return <main style={{padding:20}}><h2>Plans</h2><div>{demo.map(p=> <PlanCard key={p.id} plan={p}/>)}</div></main>
}