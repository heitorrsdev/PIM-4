import { createContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Snackbar } from 'react-native-paper';

import { registerToast } from './toastController';

interface ToastContetProps {
  showToast: (msg: string) => void;
}

export const ToastContext = createContext<ToastContetProps>({
  showToast: () => {},
});

export function ToastProvider({ children }: any) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  function showToast(msg: string) {
    setMessage(msg);
    setVisible(true);
  }

  useEffect(() => {
    registerToast(showToast);
  }, []);

  const isMobile = Platform.OS !== 'web';

  return (
    <ToastContext.Provider value={{ showToast }}>
      <>
        {children}
        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          duration={2500}
          wrapperStyle={
            isMobile
              ? { top: 100, bottom: undefined, position: 'absolute' }
              : undefined
          }
        >
          {message}
        </Snackbar>
      </>
    </ToastContext.Provider>
  );
}
