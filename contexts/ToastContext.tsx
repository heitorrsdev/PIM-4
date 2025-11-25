import { createContext, useEffect, useState } from 'react';
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

  return (
    <ToastContext.Provider value={{ showToast }}>
      <>
        {children}
        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          duration={2500}
        >
          {message}
        </Snackbar>
      </>
    </ToastContext.Provider>
  );
}
