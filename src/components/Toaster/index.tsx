import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Toast as ToastInterface, useToaster } from '../../hooks/toaster';

import { Container, Toast } from './styles';

interface ToasterProps {
  toasts: ToastInterface[];
}

const Toaster: React.FC<ToasterProps> = ({ toasts }) => {
  const { eatToast } = useToaster();

  return (
    <Container>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          type={toast.type}
          hasDescription={!!toast.description}
        >
          <FiAlertCircle size={20} />

          <div>
            <strong>{toast.title}</strong>
            {toast.description && <p>{toast.description}</p>}
          </div>

          <button type="button" onClick={() => eatToast(toast.id)}>
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default Toaster;
