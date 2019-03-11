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
  alternativeColor: string,
  backgroundColor: string,
  shadowColor: string
}

export const theme = {
  primaryColor: "#408CCA",
  alternativeColor: "#F5A142",
  backgroundColor: "#F5F5F5",
  shadowColor: "#A4A4A4"
};

export default styled;
export { css, keyframes, ThemeProvider };