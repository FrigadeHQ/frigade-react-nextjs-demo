import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FrigadeProvider } from '@frigade/react';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { getOrganizationId, getUserId } from '../utils/users';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FrigadeProvider
      publicApiKey='api_public_GY6O5JS99XTL2HAXU0D6OQHYQ7I706P5I9C9I7CEZFNFUFRARD2DVDSMFW3YT3SV'
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
            colorPrimary: '#FA2555',
            colorBorder: '#E2E2E2',
            borderRadius: 8,
          },
        },
      }}
    >
      <main className='w-full h-screen'>
        <Component {...pageProps} />
      </main>
      <Toaster position='top-right' />
    </FrigadeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
