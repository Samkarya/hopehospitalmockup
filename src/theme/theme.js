import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Colors extracted from the Hope Hospital Logo
const brandColors = {
  green: '#2E7D32',      // Deep Forest Green (Primary Brand Color)
  yellow: '#FBC02D',     // Mustard/Amber Yellow (Secondary Brand Color)
  darkGreen: '#1B5E20',  // Darker Green for hover states/Footer
  lightGreen: '#E8F5E9', // Very light green for backgrounds
  red: '#D32F2F',        // Emergency Red
  textMain: '#1A2027',   // Dark Grey for readability
  white: '#FFFFFF',
};

let theme = createTheme({
  palette: {
    primary: {
      main: brandColors.green,
      light: '#4CAF50',
      dark: brandColors.darkGreen,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.yellow,
      light: '#FFF176',
      dark: '#F57F17',
      contrastText: brandColors.darkGreen, // Yellow bg needs dark text for contrast
    },
    error: {
      main: brandColors.red,
    },
    warning: {
      main: '#ED6C02', // Orange for specific alerts
    },
    background: {
      default: '#FAFAFA',
      paper: brandColors.white,
      subtle: brandColors.lightGreen, // Custom background for alternating sections
    },
    text: {
      primary: brandColors.textMain,
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: brandColors.darkGreen, // Headings in Dark Green look professional
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      color: brandColors.darkGreen,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      color: brandColors.green,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          boxShadow: 'none',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.4)', // Green glow
          },
        },
        containedSecondary: {
          color: brandColors.darkGreen, // Ensure text is readable on Yellow buttons
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#F9A825',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.06)',
          transition: 'transform 0.3s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;