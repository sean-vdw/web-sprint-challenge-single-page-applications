import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('An order name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xl'], 'A pizza size is required'),
  sauce: yup
    .string()
    .oneOf(['marinara', 'garlic', 'white', 'squidInk'], 'A pizza sauce is required'),
  Sausage: yup
    .string(),
  Mushrooms: yup
  .string(),
  Peppers: yup
  .string(),
  Salami: yup
  .string(),
  Jalapenos: yup
  .string(),
  Pineapple: yup
  .string(),
  special: yup.string(),
});

export default schema;