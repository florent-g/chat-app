import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.provider>
);

export const useStateValue = () => useContext(StateContext);
