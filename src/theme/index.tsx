import React from 'react';
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  presetDarkPalettes,
  presetPalettes,
  PalettesProps,
} from '@ant-design/colors';

import { CustomPaletteColorOptions, PaletteThemeProps } from '~/types/theme';

export const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
  const mode = 'dark';

  const colors: PalettesProps =
    mode === 'dark' ? presetDarkPalettes : presetPalettes;

  const { blue, red, gold, cyan, green, grey } = colors;

  const greyColors: CustomPaletteColorOptions = {
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
  };

  const paletteColor: PaletteThemeProps = {
    primary: {
      light: blue[3],
      main: blue[5],
      dark: blue[6],
      contrastText: '#fff',
    },
    secondary: {
      light: grey[4],
      main: grey[6]!,
      dark: grey[8],
      contrastText: grey[0],
    },
    error: {
      light: red[2],
      main: red[4],
      dark: red[7],
      contrastText: '#fff',
    },
    warning: {
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      contrastText: grey[2],
    },
    info: {
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      contrastText: '#fff',
    },
    success: {
      light: green[3],
      main: green[5],
      dark: green[7],
      contrastText: '#fff',
    },
    grey: greyColors,
  };

  const theme = createTheme({
    palette: {
      divider: paletteColor.grey[900],
      // mode === 'dark'
      //   ? alpha(paletteColor.grey[900]!, 0.05)
      //   : paletteColor.grey[200],
    },
    typography: {
      fontFamily: [
        'NotoSans',
        'NotoSansThai',
        'Arial',
        'Roboto',
        "'Helvetica Neue'",
        'sans-serif',
      ].join(','),
    },
    shape: {
      borderRadius: 15,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
