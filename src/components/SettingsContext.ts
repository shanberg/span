'use client'

import React from "react";

export const SettingsContext = React.createContext<Settings>({
  styles: ""
});

export const SettingsProvider = SettingsContext.Provider;
