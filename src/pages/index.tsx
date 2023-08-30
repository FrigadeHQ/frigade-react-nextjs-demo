import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  FrigadeForm,
  useFlows,
  useOrganization,
  useUser,
} from '@frigade/react';
import { useReward } from 'react-rewards';
import Checkbox from '../components/icons/Checkbox';
import {
  classNames,
  FORM_APPEARANCE,
  WELCOME_MODAL_STYLE,
} from '../utils/classes';
import { motion } from 'framer-motion';
import TopBanner from '../components/TopBanner';
import { useRouter } from 'next/router';
import DemoCTAs from '../components/DemoCTAs';
import Script from 'next/script';

const Home: NextPage = () => {
  const { reward, isAnimating } = useReward(`reward`, 'confetti', {
    elementCount: 500,
    spread: 800,
    lifetime: 800,
    angle: 90,
    zIndex: 2500,
    position: 'fixed',
  });
  const [completedFormPages, setCompletedFormPages] = useState<Set<number>>(
    // Pull from localstorage if available
    new Set<number>(
      window
        ? JSON.parse(localStorage.getItem('completedFormPages') || '[]')
        : []
    )
  );
  const [country, setCountry] = useState<string>('Germany');
  const [companyName, setCompanyName] = useState<string>('your company');

  const {
    getFlowStatus,
    getStepStatus,
    markFlowNotStarted,
    getNumberOfSteps,
    getCurrentStepIndex,
    getNumberOfStepsCompleted,
    getFlowSteps,
    isLoading: isLoadingFrigade,
  } = useFlows();
  const { addPropertiesToUser } = useUser();
  const { addPropertiesToOrganization } = useOrganization();
  const router = useRouter();

  const flowId = 'flow_UMMgCreCvittYd68';
  const currentStep = getCurrentStepIndex(flowId);
  const totalSteps = getNumberOfSteps(flowId);
  const stepsCompleted = Math.max(
    completedFormPages.size,
    getNumberOfStepsCompleted(flowId)
  );
  const steps = getFlowSteps(flowId);
  const flowStatus = getFlowStatus(flowId);

  const [width, setWidth] = useState<number>(1024);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  function resetDemo() {
    localStorage.clear();
    window.location.reload();
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
    if (!window) {
      return;
    }
    localStorage.setItem(
      'completedFormPages',
      JSON.stringify(Array.from(completedFormPages))
    );
  }, [completedFormPages]);

  useEffect(() => {
    if (flowStatus === 'COMPLETED_FLOW') {
      router.push('/dashboard');
    }
  }, [flowStatus]);

  const isMobile = width <= 1024;

  return (
    <>
      <Head>
        <title>Frigade + Next.js Demo app</title>
        <meta
          property='og:image'
          content='https://frigade.com/img/frigademetaimage.png'
        />
        <Script>
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init('phc_V9yoG0UsQv5NJo5d1kXlgSoftbP9wfVbj7cUIKCzgZ',{api_host:'https://api2.frigade.com'})`}
        </Script>
      </Head>
      {isMobile && (
        <div className='w-full h-full flex justify-center items-center align-middle px-8'>
          <div>
            <h1>This demo is not supported on mobile or small devices</h1>
            <br />
            <a href='https://frigade.com' className='text-blue-500'>
              Return to Frigade.com
            </a>
          </div>
        </div>
      )}
      {isLoadingFrigade ||
        (flowStatus == 'COMPLETED_FLOW' && (
          <div className='w-full h-full flex justify-center items-center align-middle px-8'>
            <div className='flex justify-center items-center h-screen'>
              <div className='relative inline-flex'>
                <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
                <div className='w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping'></div>
                <div className='w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse'></div>
              </div>
            </div>
          </div>
        ))}
      {!isMobile && !isLoadingFrigade && (
        <>
          <div
            id='reward'
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2500]'
          />
          <div className='flex flex-col min-h-screen'>
            <TopBanner />
            <div className='flex flex-row flex-1'>
              <div className='flex bg-gray-50 p-8 flex-col justify-start w-[320px]'>
                <div>
                  <img className='h-13 w-auto pb-6' src='/logo.svg' />
                </div>
                <div className='text-[#7E899A] text-sm'>
                  Complete the following steps to get your account fully set up.
                </div>
                <div className='mt-8'>
                  <div className='flex flex-row items-center gap-2'>
                    <div className='flex text-sm font-bold'>
                      {stepsCompleted} of {totalSteps}
                    </div>
                    <div className='relative flex flex-grow h-[10px] bg-gray-300/50 rounded-[200px]'>
                      <motion.div
                        className='absolute top-0 left-0 h-full bg-acme-red rounded-[200px]'
                        animate={{
                          width: `${
                            Math.max(0.05, stepsCompleted / totalSteps) * 100
                          }%`,
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div className='mt-8'>
                  {steps.map((step, index) => {
                    return (
                      <div
                        key={step.id}
                        className={classNames(
                          `flex flex-row items-center gap-3 mb-4`,
                          index == currentStep ? `` : `text-[#C5CBD3] `
                        )}
                      >
                        <div className='flex items-center justify-center text-acme-red w-[24px] h-[24px] rounded-[100px]'>
                          <Checkbox
                            checked={
                              step.complete || completedFormPages.has(index)
                            }
                            current={index == currentStep}
                          />
                        </div>
                        <div className='flex text-sm font-semibold'>
                          {step.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='mt-12 flex-grow h-full items-end flex'>
                  <DemoCTAs />
                </div>
              </div>
              <div className='relative flex-grow w-0 flex-1'>
                <div className='m-auto max-w-[500px] pt-12 pb-12'>
                  <FrigadeForm
                    allowBackNavigation
                    type='inline'
                    flowId={flowId}
                    validationHandler={async (
                      step,
                      index,
                      nextStep,
                      allFormData,
                      stepSpecificFormData
                    ) => {
                      setCompletedFormPages((prev) => {
                        prev.add(index);
                        return new Set(prev);
                      });

                      if (
                        step.id == 'company-location' &&
                        stepSpecificFormData?.data['country']
                      ) {
                        const countryId =
                          stepSpecificFormData?.data['country']['choice'][0];
                        // Replace dashes with spaces and uc first letter of each word
                        const countryName = countryId
                          .split('-')
                          .map(
                            (word: string) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(' ');
                        setCountry(countryName);
                      }
                      if (
                        step.id == 'welcome' &&
                        stepSpecificFormData?.data['company-name']
                      ) {
                        const company =
                          stepSpecificFormData['data']['company-name']['text'];
                        setCompanyName(company.trim());
                        addPropertiesToOrganization({
                          companyName: company.trim(),
                        });
                      }

                      if (
                        step.id == 'account-setup' &&
                        stepSpecificFormData?.data['full-name'] &&
                        stepSpecificFormData?.data['full-name']['text']
                      ) {
                        const fullName =
                          stepSpecificFormData['data']['full-name']['text'];
                        addPropertiesToUser({
                          fullName: fullName,
                          companyName: companyName,
                        });
                      }
                      return true;
                    }}
                    appearance={FORM_APPEARANCE}
                    customVariables={{
                      country: country,
                      companyName: companyName,
                    }}
                  />
                  <FrigadeForm
                    flowId='flow_6iuuuELhADXddJ6v'
                    appearance={WELCOME_MODAL_STYLE}
                    dismissible={false}
                    type='modal'
                    modalPosition='center'
                    showFrigadeBranding
                    endFlowOnDismiss={false}
                    hideOnFlowCompletion={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
