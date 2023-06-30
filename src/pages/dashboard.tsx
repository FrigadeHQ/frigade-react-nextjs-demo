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
  StepData,
  useFlowOpens,
  useFlows,
  useUser,
} from '@frigade/react';
import { getUserId } from '../utils/users';
import Placeholder from '../components/Placeholder';
import { useReward } from 'react-rewards';
import Script from 'next/script';
import toast from 'react-hot-toast';
import TopBanner from '../components/TopBanner';
import DemoCTAs from '../components/DemoCTAs';

const CHECKLIST_FLOW_ID = 'flow_WdDXTX8gF5fK5AN2';
const FORM_FLOW_ID = 'flow_Hi20i2TiW2S1nLj5';
const EMBEDDED_TIP_FLOW_ID = 'flow_RCbUX0bxjIBtPjgW';
const TOUR_FLOW_ID = 'flow_RAkvVt4kb61syA7g';
const PRODUCT_ANNOUNCEMENT_STEP_ID = 'announcements';
const DEMO_COMPLETE_FLOW_ID = 'flow_qUIhb7Ymm5jFDDYu';
const ANNOUNCEMENT_FLOW_ID = 'flow_1hOrTHbUdcf64Jd0';
const EMBEDDED_TIP_STEP_ID = 'embeddedTips';
const PRODUCT_HINTS_STEP_ID = 'productHints';
const ANNOUNCEMENTS_STEP_ID = 'announcements';

const teams = [
  { id: 1, name: '', href: '#', initial: 'A', current: false },
  { id: 2, name: '', href: '#', initial: 'B', current: false },
  { id: 3, name: '', href: '#', initial: 'C', current: false },
];

const Home: NextPage = () => {
  const { reward, isAnimating } = useReward(`reward`, 'confetti', {
    elementCount: 200,
    spread: 800,
    lifetime: 800,
    angle: 90,
    zIndex: 2500,
    position: 'fixed',
  });
  const { setOpenFlowState } = useFlowOpens();
  const { getFlowStatus, getStepStatus, markFlowNotStarted } = useFlows();
  const { addPropertiesToUser } = useUser();
  const [hasShownChecklistOnLoad, setHasShownChecklistOnLoad] = useState(false);

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

  useEffect(() => {
    if (hasShownChecklistOnLoad) {
      return;
    }
    reward();
    setHasShownChecklistOnLoad(true);
    setTimeout(() => {
      setOpenFlowState(CHECKLIST_FLOW_ID, true);
    }, 700);
  }, [hasShownChecklistOnLoad, setHasShownChecklistOnLoad, setOpenFlowState]);

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
      <Script>
        {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init('phc_V9yoG0UsQv5NJo5d1kXlgSoftbP9wfVbj7cUIKCzgZ',{api_host:'https://api2.frigade.com'})`}
      </Script>
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
          <TopBanner />
          <div
            id='reward'
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2500]'
          />
          <FrigadeTour
            tooltipPosition='auto'
            flowId={TOUR_FLOW_ID}
            showTooltipsSimultaneously
            showHighlightOnly
            showStepCount={false}
            dismissible={true}
            dismissBehavior='complete-step'
            onComplete={() => {
              toast.success('Product hints completed!');
            }}
          />
          {getFlowStatus(ANNOUNCEMENT_FLOW_ID) === 'COMPLETED_FLOW' && (
            <FrigadeForm
              type='modal'
              flowId={DEMO_COMPLETE_FLOW_ID}
              endFlowOnDismiss
            />
          )}
          {getStepStatus(CHECKLIST_FLOW_ID, PRODUCT_ANNOUNCEMENT_STEP_ID) ===
            'COMPLETED_STEP' && (
            <FrigadeForm
              type='modal'
              modalPosition='bottom-right'
              flowId={ANNOUNCEMENT_FLOW_ID}
              endFlowOnDismiss
            />
          )}
          <div className=''>
            {/* Static sidebar for desktop */}
            <div className='hidden z-[105] lg:fixed lg:inset-y-0 lg:z-[105] lg:flex lg:w-72 lg:flex-col'>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
                <div className='flex mt-16 pt-1 items-center'>
                  <a href='https://frigade.com' target='_blank'>
                    <img className='h-13 w-auto' src='/logo.svg' />
                  </a>
                </div>
                <nav className='flex flex-1 flex-col'>
                  <FrigadeProgressBadge
                    title='Frigade Guided Demo'
                    flowId={CHECKLIST_FLOW_ID}
                    hideOnFlowCompletion
                    className='w-full mb-8 mt-4'
                    appearance={{
                      styleOverrides: {
                        badgeTitle: {
                          color: 'black',
                        },
                      },
                    }}
                  />
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
                        ))}{' '}
                      </ul>
                    </li>
                    <li>
                      <span className='frigade-sidebar-tooltip'></span>
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
                  <div className='flex text-xs my-4 text-gray-300'>
                    Username:&nbsp;
                    <span className='font-semibold'>{getUserId()}</span>
                  </div>
                  <DemoCTAs />
                </nav>
              </div>
            </div>
            <div className='lg:pl-72'>
              <div className='sticky top-0 z-[105] flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
                >
                  <span className='sr-only'>Open sidebar</span>
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div
                  className='h-6 w-px bg-gray-200 lg:hidden'
                  aria-hidden='true'
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
                        type='modal'
                        checklistStyle='with-guide'
                        appearance={{
                          styleOverrides: {
                            modalContainer: {
                              height: '550px',
                            },
                            button: {
                              fontWeight: 'normal',
                            },
                            buttonSecondary: {
                              borderColor: '#E5E7EB',
                              color: '#000',
                              fontWeight: 'normal',
                            },
                          },
                        }}
                        onButtonClick={(step: StepData) => {
                          if (step.id === PRODUCT_HINTS_STEP_ID) {
                            addPropertiesToUser({
                              qualifiedForHintsTour: true,
                            });
                            markFlowNotStarted(TOUR_FLOW_ID);
                          }
                          if (step.id === ANNOUNCEMENTS_STEP_ID) {
                            markFlowNotStarted(ANNOUNCEMENT_FLOW_ID);
                          }
                          if (step.id === EMBEDDED_TIP_STEP_ID) {
                            markFlowNotStarted(EMBEDDED_TIP_FLOW_ID);
                          }

                          return true;
                        }}
                      />
                    </div>

                    {/* Separator */}
                    <div
                      className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                      aria-hidden='true'
                    />

                    {/* Profile dropdown */}
                    <span className='relative -mr-4 mt-3 frigade-profile-tooltip' />
                    <div className='-m-1.5 flex items-center p-1.5'>
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
                    {getStepStatus(CHECKLIST_FLOW_ID, EMBEDDED_TIP_STEP_ID) ===
                      'COMPLETED_STEP' && (
                      <FrigadeEmbeddedTip
                        flowId={EMBEDDED_TIP_FLOW_ID}
                        appearance={{
                          styleOverrides: {
                            embeddedTipContainer: {
                              maxWidth: '100%',
                              paddingBottom: '16px',
                              paddingTop: '16px',
                            },
                            embeddedTipButton: {
                              marginBottom: '0px',
                              width: '150px',
                            },
                          },
                        }}
                      />
                    )}
                    <div className='border border-gray-200 overflow-hidden sm:rounded-lg'>
                      <div className='px-4 py-5 sm:px-6 h-48'></div>
                    </div>
                    <div
                      id=''
                      className='border border-gray-200 overflow-hidden sm:rounded-lg'
                    >
                      <div className='px-4 py-5 sm:px-6 h-96'></div>
                    </div>
                  </div>
                  <div
                    id='frigade-on-page-tooltip'
                    className='lg:col-span-1 space-y-4'
                  >
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
