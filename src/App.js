import React from 'react';
import { ThemeProvider, ColorMode } from 'theme-ui';
import { Box } from '@theme-ui/components';
import theme from 'theme';
import ColorModeSwitcher from 'ColorModeSwitcher';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <ColorModeSwitcher />
      <Box p={4} color="text" bg="muted">
        Beep
      </Box>
    </ThemeProvider>
  );
}

export default App;
