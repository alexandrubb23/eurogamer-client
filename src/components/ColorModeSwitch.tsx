import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const Icon = colorMode === 'dark' ? MoonIcon : SunIcon;

  return (
    <HStack
      onClick={toggleColorMode}
      width={{
        base: '100%',
        md: 'auto',
      }}
    >
      <Icon boxSize={6} cursor='pointer' />
    </HStack>
  );
};

export default ColorModeSwitch;
