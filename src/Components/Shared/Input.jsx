import React, { useReducer, useEffect } from 'react';
import { validate } from '../../Utils/validator';
import {
  FormErrorMessage,
  FormLabel,
  Input,
  FormControl,
} from '@chakra-ui/react';
const CHANGE = 'CHANGE';
const TOUCHE = 'TOUCHE';

export const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validator),
      };

    case TOUCHE:
      return {
        ...state,
        isTouche: true,
      };

    default:
      return state;
  }
};
export const InputCustom = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouche: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = e => {
    dispatch({
      type: CHANGE,
      val: e.target.value,
      validator: props.validators,
    });
  };

  const toucheHandler = () => {
    dispatch({
      type: TOUCHE,
    });
  };

  return (
    <div>
      <FormControl
        isInvalid={!inputState.isValid && inputState.isTouche}
        mt="10px"
      >
        <FormLabel> {props.label}</FormLabel>
        <Input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={toucheHandler}
          value={inputState.value}
          variant="flushed"
          isInvalid={!inputState.isValid && inputState.isTouche}
        />
        {!inputState.isValid && inputState.isTouche && (
          <FormErrorMessage mb="5px">{props.errorText}</FormErrorMessage>
        )}
      </FormControl>
    </div>
  );
};
export default InputCustom;
