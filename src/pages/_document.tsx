import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='h-full w-full'>
      <Head />
      <body className='h-full w-full bg-gray'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
