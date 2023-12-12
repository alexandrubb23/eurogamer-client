import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const Icon = colorMode === 'dark' ? MoonIcon : SunIcon;

  return (
    <HStack mr={3}>
      <Icon boxSize={6} onClick={toggleColorMode} cursor='pointer' />
    </HStack>
  );
};

export default ColorModeSwitch;
