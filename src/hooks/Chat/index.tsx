import React, {createContext, useCallback, useState, useContext} from 'react';

interface ChatData {
  id: number;
  content: string;
  date: string;
  status: number;
  user: {
    id: number;
    username: string;
    office: string;
  };
}

interface ChatContextData {
  // dataChat: ChatData[];
  // notReading: number;
  showModal(): void;
  closeModal(): void;
  isModalVisible: boolean;
  alertHospital: boolean;
  showAlertHospital(): void;
  closeAlertHospital(): void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: React.FC = ({children}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alertHospital, setAlertHospital] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const showAlertHospital = useCallback(() => {
    setAlertHospital(true);
  }, []);

  const closeAlertHospital = useCallback(() => {
    setAlertHospital(false);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        showModal,
        closeModal,
        isModalVisible,
        alertHospital,
        showAlertHospital,
        closeAlertHospital,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

function useChat(): ChatContextData {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
export {ChatProvider, useChat};
