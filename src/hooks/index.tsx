import React from 'react';
import {TourProvider} from './Tour';

const AppProvider: React.FC = ({children}) => (
  <TourProvider>{children}</TourProvider>
);

export default AppProvider;
