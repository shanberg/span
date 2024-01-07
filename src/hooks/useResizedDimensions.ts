import React from 'react';

export function useResizedDimensions(ref: React.RefObject<any>, settings: Settings): number | null {
  // Synchronized state for settings to track if user has updated settings
  const [syncSettings, setSyncSettings] = React.useState(settings);

  // State to store dimensions
  const [width, setWidth] = React.useState(null);

  // Function to measure and update dimensions
  const measureAndUpdate = () => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      setWidth(width);
    }
  };

  React.useEffect(() => {
    // Compare old settings with new settings. If they are different, update dimensions.
    if (JSON.stringify(syncSettings) !== JSON.stringify(settings)) {
      measureAndUpdate();
      setSyncSettings(settings); // Update synchronized settings
    }
  }, [settings, syncSettings]); // Re-run effect when 'settings' changes

  // Initial measurement on mount
  React.useEffect(() => {
    measureAndUpdate();
  }, []);

  return width;
}