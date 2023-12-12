import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ config }, withProse());

export default theme;
