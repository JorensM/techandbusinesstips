'use client'
// Core
import Helmet from 'react-helmet';

// Components
import Container from "@/app/_components/container";

// Constants
import { GITHUB_URL } from '@/constants/URLS';
import { useState } from 'react';
import SubscribeForm from './SubscribeForm';

export function Footer() {

  

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-4">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-center max-w-[500px]">
          <SubscribeForm
            endpoint='/api/subscribe/newsletter'
            title='Subscribe to newsletter'
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
