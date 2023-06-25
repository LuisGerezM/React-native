import { DefaultTheme } from "styled-components/native";

declare module 'styled-components/native'{
  export interface DefaultTheme {
    color?: string;
    colors: {primary: string, secondary:string, tertiary:string };
    fontSizes: {large: string, medium: string, small: string};
    fontWeights: {heavy: number, bold: number, light: number};
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#0FA5E9',
    secondary: '#FF005E',
    tertiary: 'gray'
  },
  fontSizes: {
    large: '40px',
    medium: '30px',
    small: '20px'
  },
  fontWeights: {
    heavy: 900,
    bold: 700,
    light: 300
  }
};
