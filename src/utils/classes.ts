import { Appearance } from '@frigade/react';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const FORM_APPEARANCE = {
  styleOverrides: {
    formLabelRequired: {
      display: 'none',
    },
    formLabel: {
      fontSize: '14px',
      marginBottom: '0px',
    },
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
      height: '40px',
      fontSize: '14px',
    },
    inputComponent: {
      height: '40px',
      fontSize: '14px',
      color: '#0F1114',
      '&::placeholder': {
        fontSize: '14px',
      },
    },
    button: {
      fontSize: '14px',
      height: '40px',
      alignItems: 'center',
    },
    backButtonSecondary: {
      fontSize: '14px',
      height: '40px',
      alignItems: 'center',
    },
    multipleChoiceListItem: {
      fontSize: '14px',
    },
    multipleChoiceListItemSelected: {
      fontSize: '14px',
    },
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
      order: 2,
      width: '50%',
      height: '38px',
    },
    button: {
      fontWeight: 'normal',
      fontSize: '12px',
      backgroundColor: '#0171F8',
      borderColor: '#0171F8',
      order: 1,
      width: '50%',
      height: '38px',
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
      justifyContent: 'left',
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
