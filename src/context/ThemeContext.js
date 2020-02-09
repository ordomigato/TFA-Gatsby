import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
    
  return (
    <ThemeContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;