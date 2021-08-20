import React, { useState } from 'react';
import InputCustom from '../Shared/Input';
import useForm from '../../Hooks/useForm';
import { VALIDATOR_REQUIRE } from '../../Utils/validator';
import { Button } from '@chakra-ui/react';
import FormContainer from './FormContainer';
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      password: {
        value: '',
        isValid: false,
      },

      email: { value: '', isValid: false },
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
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese un email"
        showPassword={showPassword}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <InputCustom
        type={showPassword ? 'text' : 'password'}
        id="password"
        label="Password"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
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
