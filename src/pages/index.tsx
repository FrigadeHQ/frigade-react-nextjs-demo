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

  // Use effect to store completedFormPages in local storage
  useEffect(() => {
    if (!window) {
      return;
    }
    localStorage.setItem(
      'completedFormPages',
      JSON.stringify(Array.from(completedFormPages))
    );
  }, [completedFormPages]);

  const isMobile = width <= 1024;

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
            <h1>This demo is not supported on mobile or small devices</h1>
            <br />
            <a href='https://frigade.com' className='text-blue-500'>
              Return to Frigade.com
            </a>
          </div>
        </div>
      )}
      {isLoadingFrigade && (
        <div className='w-full h-full flex justify-center items-center align-middle px-8'>
          <div className='flex justify-center items-center h-screen'>
            <div className='relative inline-flex'>
              <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
              <div className='w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping'></div>
              <div className='w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse'></div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && !isLoadingFrigade && (
        <>
          <div
            id='reward'
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2500]'
          />
          <div className='flex flex-col min-h-screen'>
            <TopBanner />
            <div className='flex flex-row flex-1'>
              <div className='flex bg-[#F4F8F9] p-8 flex-col justify-start w-[320px]'>
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
                    <div className='relative flex flex-grow h-[8px] bg-[#b1ceff80] rounded-[200px]'>
                      <motion.div
                        className='absolute top-0 left-0 h-full bg-brand-blue rounded-[200px]'
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
                        <div className='flex items-center justify-center w-[24px] h-[24px] rounded-[100px]'>
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
                  <button
                    className='bg-brand-blue text-white !rounded-[4px] p-2 text-xs hover:opacity-90'
                    onClick={() => {
                      resetDemo();
                    }}
                  >
                    Reset Demo
                  </button>
                </div>
              </div>
              <div className='relative flex-grow w-0 flex-1'>
                <div className='m-auto max-w-[500px] pt-32 pb-12'>
                  <FrigadeForm
                    allowBackNavigation
                    type='inline'
                    flowId={flowId}
                    onComplete={() => {
                      router.push('/dashboard');
                    }}
                    onStepCompletion={(
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
                        step.id == 'workspace-setup' &&
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
