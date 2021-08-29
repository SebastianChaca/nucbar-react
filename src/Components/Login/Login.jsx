import React, { useState } from 'react';
import InputCustom from '../Shared/Input';
import useForm from '../../Hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_PASSWORD,
} from '../../Utils/validator';
import { LoginForm, RegisterForm } from '../../Utils/initialForms';
import { Button } from '@chakra-ui/react';
import FormContainer from './FormContainer';
import { LinkText } from './LinkText';
export const Login = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(LoginForm, false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleFormMode = () => {
    if (loginMode) {
      setFormData(RegisterForm(formState.inputs), false);
    } else {
      setFormData(
        LoginForm,
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    }
    setLoginMode(!loginMode);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('sarasa');
  };
  return (
    <>
      <FormContainer>
        {!loginMode && (
          <InputCustom
            type="text"
            id="name"
            label="Nombre"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        <InputCustom
          type="text"
          id="email"
          label="E-mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL(formState.inputs.email.value)]}
          showPassword={showPassword}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <InputCustom
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(10)]}
          handlePasswordVisibility={handlePasswordVisibility}
          showPassword={showPassword}
        />
        {!loginMode && (
          <InputCustom
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            label="Confirma la password"
            onInput={inputHandler}
            validators={[VALIDATOR_PASSWORD(formState.inputs.password.value)]}
            handlePasswordVisibility={handlePasswordVisibility}
            showPassword={showPassword}
          />
        )}
        <Button
          bg="nucba.btn"
          mt="25px"
          isFullWidth
          color="#ffff"
          disabled={!formState.isValid}
          onClick={handleSubmit}
        >
          Iniciar sesión
        </Button>
      </FormContainer>
      <LinkText loginMode={loginMode} handleMode={handleFormMode} />
    </>
  );
};
