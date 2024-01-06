import { fontStyles } from "~/lib/styles";
import React from "react";

export const SettingsContext = React.createContext<Settings>({
  performanceMode: false,
  fontStyle: fontStyles[1]
});

export const SettingsProvider = SettingsContext.Provider;
