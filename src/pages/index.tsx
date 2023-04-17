import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Bars3Icon, StopIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { classNames } from '../utils/classes';
import {
  FrigadeChecklist,
  FrigadeEmbeddedTip,
  FrigadeForm,
  FrigadeProgressBadge,
  FrigadeTour,
} from '@frigade/react';
import { resetAllIds } from '../utils/users';
import Placeholder from '../components/Placeholder';
import { useReward } from 'react-rewards';

const CHECKLIST_FLOW_ID = 'flow_WdDXTX8gF5fK5AN2';
const CHECKLIST_GUIDE_FLOW_ID = 'flow_I17JP3IJkyQgKnjh';
const FORM_FLOW_ID = 'flow_Hi20i2TiW2S1nLj5';
const EMBEDDED_TIP_FLOW_ID = 'flow_RCbUX0bxjIBtPjgW';
const TOUR_FLOW_ID = 'flow_RAkvVt4kb61syA7g';

const teams = [
  { id: 1, name: '', href: '#', initial: 'A', current: false },
  { id: 2, name: '', href: '#', initial: 'B', current: false },
  { id: 3, name: '', href: '#', initial: 'C', current: false },
];

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { reward, isAnimating } = useReward(`reward`, 'confetti', {
    elementCount: 700,
    spread: 800,
    lifetime: 1000,
    angle: 90,
    zIndex: 9999,
    colors: ['#336AF0', '#04071F', '#11204F', '#336AF0', '#04071F'],
  });

  const [width, setWidth] = useState<number>(1024);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (!window) {
      return;
    }
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <Head>
        <title>Frigade + Next.js Demo app</title>
        <meta
          property='og:image'
          content='https://frigade.com/img/frigademetaimage.png'
        />
      </Head>
      {isMobile && (
        <div className='w-full h-full flex justify-center items-center align-middle px-8'>
          <div>
            <h1>This demo is not supported on mobile devices</h1>
            <br />
            <a href='https://frigade.com' className='text-blue-500'>
              Return to Frigade.com
            </a>
          </div>
        </div>
      )}
      {!isMobile && (
        <>
          <div
            id='reward'
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]'
          />
          <FrigadeTour
            tooltipPosition='auto'
            flowId={TOUR_FLOW_ID}
            showTooltipsSimultaneously
            showHighlightOnly
            showStepCount={false}
          />
          <FrigadeForm
            flowId={FORM_FLOW_ID}
            type='large-modal'
            appearance={{
              styleOverrides: {
                modalContainer: {
                  width: '1000px',
                  height: '600px',
                },
              },
            }}
            dismissible={false}
            hideOnFlowCompletion
            onComplete={() => {
              reward();
            }}
          />
          <div className=''>
            {/* Static sidebar for desktop */}
            <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
                <div className='flex h-16 shrink-0 items-center'>
                  <img
                    className='h-6 w-auto'
                    src='https://frigade.com/img/frigsadelogo.svg'
                    alt='Frigade'
                  />
                </div>
                <nav className='flex flex-1 flex-col'>
                  <div className='w-full mb-8 mt-4'>
                    <FrigadeProgressBadge
                      title='Frigade Guided Demo'
                      flowId={CHECKLIST_FLOW_ID}
                      hideOnFlowCompletion
                    />
                  </div>
                  <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                    <li>
                      <ul role='list' className='-mx-2 space-y-1'>
                        {Array.from(Array(6).keys()).map((id) => (
                          <li key={id}>
                            <a
                              href='#'
                              className={classNames(
                                'text-gray-600 hover:text-gray-600 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium items-center'
                              )}
                            >
                              <StopIcon
                                className={classNames(
                                  'text-gray-200',
                                  'h-6 w-6 shrink-0'
                                )}
                                aria-hidden='true'
                              />
                              <Placeholder
                                className={classNames('bg-gray-200 h-2 w-20')}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className='text-xs font-semibold leading-6 text-gray-400'>
                        Your teams
                      </div>
                      <ul role='list' className='-mx-2 mt-2 space-y-1'>
                        {teams.map((team) => (
                          <li key={team.id}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-50 text-gray-800'
                                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center'
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'text-gray-400 border-gray-400'
                                    : 'text-gray-400 border-gray-300 group-hover:border-gray-300 group-hover:text-gray-400',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className='truncate'>
                                <Placeholder className='bg-gray-200 h-2 w-20' />{' '}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <div className=''>
                    <button
                      className='bg-blue-50 border border-blue-700 rounded-md flex items-center justify-center h-8 w-24 text-blue-900 text-xs'
                      onClick={() => {
                        resetAllIds();
                      }}
                    >
                      Reset demo
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className='lg:pl-72'>
              <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className='sr-only'>Open sidebar</span>
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div
                  className='h-6 w-px bg-gray-200 lg:hidden'
                  aria-hidden='true'
                />
                <span
                  className='top-10 -ml-2 absolute'
                  id='frigade-tooltip-navbar-tooltip'
                />
                <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
                  <div className='relative flex flex-1'>
                    <label htmlFor='search-field' className='sr-only'>
                      Search
                    </label>
                    <MagnifyingGlassIcon
                      className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <input
                      id='search-field'
                      className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                      placeholder='Search...'
                      type='search'
                      name='search'
                    />
                  </div>
                  <div className='flex items-center gap-x-4 lg:gap-x-6'>
                    <div>
                      <FrigadeChecklist
                        hideOnFlowCompletion
                        flowId={CHECKLIST_FLOW_ID}
                        type='withGuide'
                        guideFlowId={CHECKLIST_GUIDE_FLOW_ID}
                        title="Let's show you what's possible"
                        subtitle='Build checklists like this – and other onboarding experiences – in less than an hour.'
                      />
                    </div>

                    {/* Separator */}
                    <div
                      className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                      aria-hidden='true'
                    />

                    {/* Profile dropdown */}
                    <div className='-m-1.5 flex items-center p-1.5'>
                      <span
                        className='-ml-4 absolute'
                        id='frigade-tooltip-top-navbar-tooltip'
                      />
                      <span className='sr-only'>Open user menu</span>
                      <div className='h-8 w-8 rounded-full bg-gray-200' />
                      <span className='hidden lg:flex lg:items-center'>
                        <span
                          className='ml-4 text-sm font-semibold leading-6 text-gray-900 flex gap-x-2'
                          aria-hidden='true'
                        >
                          <Placeholder className='h-3 w-12 bg-gray-200' />
                          <Placeholder className='h-3 w-20 bg-gray-200' />
                        </span>
                        <ChevronDownIcon
                          className='ml-2 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <main className='py-10'>
                {/*make a tailwind grid with 2 columns, the first one 2/3 and the second one 1/3*/}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-8'>
                  <div className='lg:col-span-2 space-y-4'>
                    <FrigadeEmbeddedTip
                      flowId={EMBEDDED_TIP_FLOW_ID}
                      appearance={{
                        styleOverrides: {
                          embeddedTipContainer: {
                            maxWidth: '100%',
                            paddingBottom: '16px',
                            paddingTop: '16px',
                          },
                          button: {
                            marginBottom: '0px',
                            width: '200px',
                            backgroundColor: '#FFF',
                            color: '#000',
                          },
                        },
                      }}
                    />
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-48'></div>
                    </div>
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-96'></div>
                    </div>
                  </div>
                  <div className='lg:col-span-1 space-y-4'>
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-48'></div>
                    </div>
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-48'></div>
                    </div>
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-48'></div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
