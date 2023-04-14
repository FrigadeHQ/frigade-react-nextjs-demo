import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FrigadeProvider } from '@frigade/react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Toaster } from 'react-hot-toast';
import TopNav from '../components/TopNav';
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
        navigate: async (url: string) => {
          // Use Next.js router to navigate url changes triggered by Frigade
          await router.push(url);
        },
        defaultAppearance: {
          theme: {
            colorText: '#3d3d3d',
            colorTextSecondary: '#494949',
            colorTextOnPrimaryBackground: '#fff',
            colorPrimary: '#3d3d3d',
            colorBorder: '#E2E2E2',
          },
        },
      }}
    >
      <div className='min-h-full h-full flex flex-col'>
        <TopNav />
        <Sidebar />
        <div className='flex flex-1 flex-col pl-64'>
          <main className='flex-1 flex-col pb-8'>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
      <Toaster />
    </FrigadeProvider>
  );
}

export default MyApp;
