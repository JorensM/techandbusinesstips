'use client';

import { useState } from "react";

const SubscribeForm = (props: { endpoint: string, title: string, notes?: string }) => {

  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeClick = async () => {
    setSubscribing(true);
    const res = await fetch(props.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        'email': email
      })
    });
    if(res.status == 201) {
      setSubscribed(true);
      setSubscribing(false)
    }
  }

  return (
    <div className='flex flex-col gap-2'>
      <>
          <p className='font-semibold'>{props.title}</p>
          <p className='text-sm text-neutral-600'>
            You may unsubscribe at any time
          </p>
          <p className="text-sm text-neutral-700">
            {props.notes || ""}
          </p>
          <input 
            className='bg-neutral-100 border border-neutral-400 p-2 py-1 w-full text-sm' 
            type='email' 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          {!subscribed ? 
            subscribing ? 
              <p>Subscribing...</p>
            :
            <button className='bg-black text-white p-2 rounded-md hover:bg-neutral-800 transition-all duration-150' onClick={handleSubscribeClick}>
              Subscribe
            </button>
          
          : <p className='text-sm text-neutral-700'>Thank you for subscribing!</p>}
        </>
    </div>
  );
}

export default SubscribeForm;