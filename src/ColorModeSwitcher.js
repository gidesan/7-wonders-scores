import React from 'react';
import { useColorMode } from 'theme-ui';

function ColorModeSwitcher() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      Switch to {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  );
}

export default ColorModeSwitcher;
