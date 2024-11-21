import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the mode
const ModeContext = createContext();

// Default value for the mode state
const defaultMode = 1;  // Set default mode to 1

// ModeProvider Component to wrap your app
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(defaultMode);

  // Log the initial state of `mode`
  useEffect(() => {
    console.log('Initial mode:', mode); // Log initial mode value

    // Example: Retrieve mode from localStorage (if needed)
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      const newMode = Number(storedMode); // Ensure it's a number
      console.log('Stored mode from localStorage:', newMode); // Log the value pulled from localStorage
      setMode(newMode);
    } else {
      console.log('No mode stored in localStorage, using default mode:', defaultMode);
    }
  }, []);

  // Log every time the mode changes
  const handleChangeMode = (newMode) => {
    console.log('Mode changing to:', newMode); // Log the mode change
    setMode(newMode);  // Update mode
    localStorage.setItem('mode', newMode); // Optionally store mode in localStorage
  };

  // Provide mode and handleChangeMode to the rest of the app
  return (
    <ModeContext.Provider value={{ mode, setMode: handleChangeMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// Custom hook to access the mode context
export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
