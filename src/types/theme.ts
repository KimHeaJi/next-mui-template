import { PaletteColorOptions, SimplePaletteColorOptions } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: ColorPartial;
};

export type CustomPaletteColorOptions = PaletteColorOptions & {
  0?: string | undefined;
  A50?: string | undefined;
  A800?: string | undefined;
};
