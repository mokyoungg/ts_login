import React, { useState, useEffect } from 'react';
import validate from './validateInfo';
import { valuesInterface, errorsInterface } from './uesform.model';

const useForm = () => {
  const [values, setValues] = useState<valuesInterface>({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState<errorsInterface>({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleError = () => {
    setErrors(validate(values));
  };

  return { handleChange, handleError, values, errors };
};

export default useForm;
