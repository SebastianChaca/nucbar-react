const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = val => ({
  type: VALIDATOR_TYPE_MIN,
  val: val,
});
export const VALIDATOR_MAX = val => ({
  type: VALIDATOR_TYPE_MAX,
  val: val,
});
export const VALIDATOR_EMAIL = val => ({
  type: VALIDATOR_TYPE_EMAIL,
  val: val,
});

export const validate = (value, validators = []) => {
  let isValid = true;
  const obj = { isValid: true, msgErr: null };
  // console.log('validators: ', validators);
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      obj.isValid = obj.isValid && value.trim().length > 0;
      obj.msgErr = 'Este campo es obligatorio';
    }

    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      const max = validators.find(v => v.type === 'MAXLENGTH');
      const maxVal = max ? max.val : 0;

      obj.isValid = obj.isValid && value.trim().length >= validator.val;
      obj.msgErr =
        !obj.isValid &&
        value.trim().length < max.val &&
        `Ingresa un minimo de ${validator.val} caracteres`;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      const min = validators.find(v => v.type === 'MINLENGTH');
      const minVal = min ? min.val : 0;

      if (value.trim().length >= minVal) {
        obj.isValid = obj.isValid && value.trim().length >= validator.val;
        obj.msgErr =
          !obj.isValid && `Ingresa un maximo de ${validator.val} caracteres`;
      }
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }

    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  console.log(obj);
  return obj;
};
