import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Color Palette
const colors = {
  primary: '#005f73',   // Deep Teal - Professionalism/Trust
  secondary: '#94d2bd', // Soft Mint - Healing/Calm
  accent: '#ee9b00',    // Warm Amber - Call to Actions/Hope
  white: '#ffffff',
  offWhite: '#f4f9f9',  // Sterile background
  textDark: '#1a2027',
  danger: '#d32f2f',    // Emergency
};

let theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.primary,
    },
    warning: {
      main: colors.accent,
      contrastText: colors.textDark,
    },
    error: {
      main: colors.danger,
    },
    background: {
      default: colors.offWhite,
      paper: colors.white,
    },
    text: {
      primary: colors.textDark,
      secondary: '#566573',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: colors.primary,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      color: colors.primary,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // More friendly/empathic tone
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
          },
        },
        containedWarning: {
          color: '#fff', 
          fontWeight: 700,
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 95, 115, 0.08)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;