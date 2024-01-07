'use client'

import React from "react";

export const SettingsContext = React.createContext<Settings>({
  performanceMode: false,
  styles: ""
});

export const SettingsProvider = SettingsContext.Provider;
