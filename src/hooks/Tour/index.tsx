import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

interface TourContextData {
  setCurrentTour: Dispatch<SetStateAction<number>>;
  currentTour: number;
}

const TourContext = createContext<TourContextData>({} as TourContextData);

const TourProvider: React.FC = ({children}) => {
  const [currentTour, setCurrentTour] = useState(0);

  return (
    <TourContext.Provider
      value={{
        currentTour,
        setCurrentTour,
      }}>
      {children}
    </TourContext.Provider>
  );
};

function useTour(): TourContextData {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
}
export {TourProvider, useTour};
