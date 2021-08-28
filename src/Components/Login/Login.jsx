import React, { useState } from 'react';
import InputCustom from '../Shared/Input';
import useForm from '../../Hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../Utils/validator';
import { Button } from '@chakra-ui/react';
import FormContainer from './FormContainer';
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      password: {
        value: '',
        validate: { isValid: false },
      },

      email: { value: '', validate: { isValid: false } },
    },
    false
  );
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormContainer>
      <InputCustom
        type="text"
        id="email"
        label="E-mail"
        onInput={inputHandler}
        validators={[VALIDATOR_EMAIL(formState.inputs.email.value)]}
        errorText="Ingrese un email"
        showPassword={showPassword}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <InputCustom
        type={showPassword ? 'text' : 'password'}
        id="password"
        label="Password"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(10)]}
        errorText="Ingrese una contraseña"
        handlePasswordVisibility={handlePasswordVisibility}
        showPassword={showPassword}
      />
      <Button
        bg="nucba.btn"
        mt="25px"
        isFullWidth
        color="#ffff"
        disabled={!formState.isValid}
      >
        Iniciar sesión
      </Button>
    </FormContainer>
  );
};
