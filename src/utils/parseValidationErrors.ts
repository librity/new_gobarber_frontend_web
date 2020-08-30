import { ValidationError } from 'yup';

interface UnformErrors {
  [key: string]: string;
}

const parseValidationErrors = (yupErrors: ValidationError): UnformErrors => {
  const unformErrors: UnformErrors = {};

  yupErrors.inner.forEach(error => {
    unformErrors[error.path] = error.message;
  });

  return unformErrors;
};

export default parseValidationErrors;
