import { Appearance } from '@frigade/react';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const FORM_APPEARANCE = {
  styleOverrides: {
    formLabelRequired: {
      display: 'none',
    },
    button:
      'without-ring rounded-md !min-w-[242px] inline-flex w-full !text-base justify-center bg-acme-red px-4 py-3 text-white shadow-sm hover:opacity-90 focus:outline-none  disabled:opacity-20 !basis-1 grow',
    backButtonSecondary:
      'without-ring rounded-md !min-w-[242px] inline-flex w-full justify-center border border-borderStroke text-black px-4 py-3 text-black shadow-sm hover:opacity-90 focus:outline-none disabled:opacity-20 sm:text-sm !basis-1 grow',
    ctaWrapper: {
      justifyContent: 'flex-end',
      flexGrow: '1',
    },
    formCTAContainer: {
      gap: '16px',
      marginTop: '12px',
    },
    checkIconContainerChecked: {
      backgroundColor: '#00D149',
    },
    checkIconContainerUnchecked: {
      border: '1px solid #D4DEDC',
    },
    mediumTitle: {
      color: '#0F1114',
      fontSize: '24px',
      marginBottom: '14px',
      letterSpacing: '0.48px',
    },
    mediumSubtitle: {
      color: '#5A6472',
      fontSize: '16px',
      letterSpacing: '0.32px',
      lineHeight: '24px',
      marginBottom: '24px',
    },
    multipleChoiceSelect: {
      height: '60px',
      fontSize: '16px',
    },
    inputComponent: {
      height: '60px',
      fontSize: '16px',
      color: '#0F1114',
    },
    multipleChoiceListItem:
      'relative my-4 flex cursor-pointer items-start border border-borderStroke  px-4 py-4 hover:opacity-80 text-[#0F1114] !mb-0',
  },
} as Appearance;

export const WELCOME_MODAL_STYLE = {
  styleOverrides: {
    buttonSecondary: {
      fontWeight: 'normal',
      backgroundColor: '#212328',
      color: '#f1f2f4',
      borderColor: '#4e5765',
      fontSize: '12px',
    },
    button: {
      fontWeight: 'normal',
      fontSize: '12px',
      backgroundColor: '#0171F8',
      borderColor: '#0171F8',
    },
    mediumTitle: {
      color: '#FFF',
      fontSize: '18px',
    },
    mediumSubtitle: 'text-slate-300 text-sm',
    callToActionTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      order: 1,
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingBottom: '24px',
      marginBottom: '0px',
    },
    callToActionImage: {
      display: 'flex',
      order: 0,
      width: '100%',
      marginBottom: '34px',
    },
    modalContainer: {
      padding: '0px',
      backgroundColor: '#202328',
      width: '440px',
      borderRadius: '8px',
    },
    modalClose: {
      display: 'none',
    },
    formCTAContainer: {
      marginTop: '0px',
      paddingTop: '0px',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingBottom: '30px',
    },
    ctaWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    poweredByFrigadeRibbon: {
      backgroundColor: '#202328',
      borderRadius: '8px',
    },
    poweredByFrigadeContainer: {
      color: '#5A6472',
    },
    modalBackground: {
      // Make it blurry
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
} as Appearance;
