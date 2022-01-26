import React from "react";

import { ThemeProvider } from "lib/context/ThemeContext";
import { NavigationProvider } from "lib/context/NavigationContext";
import navigation from "lib/navigation";

const GlobalProvider: React.FC = ({ children }) => (
  <NavigationProvider navigation={navigation}>
    <ThemeProvider>{children}</ThemeProvider>
  </NavigationProvider>
);

export default GlobalProvider;
