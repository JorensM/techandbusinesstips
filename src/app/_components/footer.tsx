'use client'
// Core
import Helmet from 'react-helmet';

// Components
import Container from "@/app/_components/container";

// Constants
import { GITHUB_URL } from '@/constants/URLS';
import { useState } from 'react';

export function Footer() {

  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeClick = async () => {
    setSubscribing(true);
    const res = await fetch('/api/subscribe', {
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
    <footer className="bg-neutral-50 border-t border-neutral-200 py-4">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-center max-w-[500px]">
          <div className='flex flex-col gap-2'>
            <>
                <p className='font-semibold'>Subscribe to newsletter</p>
                <p className='text-sm text-neutral-600'>
                  You may unsubscribe at any time
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
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
