import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
export default function Login(){
  const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
  const { login } = useContext(AuthContext);
  return (<main style={{padding:20}}>
    <h2>Login</h2>
    <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
    <input placeholder="password" value={pw} onChange={e=>setPw(e.target.value)} /><br/>
    <button onClick={()=>login({email})}>Login</button>
  </main>);
}