import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
ThemeInterface
>;

export interface ThemeInterface {
  primaryColor: string;
  primaryColor__lighten: string;
  primaryColor__darken: string;
  alternativeColor: string,
  alternativeColor__lighten: string,
  alternativeColor__darken: string,
  backgroundColor: string,
  shadowColor: string
}

export const theme = {
  primaryColor: "#408CCA",
  primaryColor__lighten: "#6265CF",
  primaryColor__darken: "#4248F5",
  alternativeColor: "#F5A142",
  alternativeColor__lighten: "#E6B37A",
  alternativeColor__darken: "#DC7B0E",
  backgroundColor: "#F5F5F5",
  shadowColor: "#444444"
};

export default styled;
export { css, keyframes, ThemeProvider };