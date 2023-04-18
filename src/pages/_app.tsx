import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FrigadeProvider } from '@frigade/react';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { getOrganizationId, getUserId } from '../utils/users';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FrigadeProvider
      publicApiKey='api_public_3MPLH7NJ9L0U963XKW7BPE2IT137GC6L742JLC2XCT6NOIYSI4QUI9I1RA3ZOGIL'
      userId={getUserId()}
      organizationId={getOrganizationId()}
      config={{
        navigate: async (url: string, target: string) => {
          if (target === '_blank') {
            window.open(url, '_blank');
            return;
          }
          // Use Next.js router to navigate url changes triggered by Frigade
          await router.push(url);
        },
        defaultAppearance: {
          theme: {
            colorText: '#3d3d3d',
            colorTextSecondary: '#494949',
            colorTextOnPrimaryBackground: '#fff',
            colorPrimary: '#2956B5',
            colorBorder: '#E2E2E2',
          },
        },
      }}
    >
      <main className='w-full h-screen'>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </FrigadeProvider>
  );
}

export default MyApp;
