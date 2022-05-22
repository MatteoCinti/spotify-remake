import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle(
  {
    body: {
      WebkitTapHighlightColor: theme`colors.pink.500`,
      ...tw`antialiased`,
    },
  },
  `
  @font-face {
    font-family: 'Ultra';
    src: url('../../public/fonts/Ultra/Ultra-Regular.ttf') format('ttf');
    font-style: normal;
  }
`,
);

const GlobalStyles = (): JSX.Element => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
