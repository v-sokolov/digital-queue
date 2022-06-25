import * as yup from 'yup';

export const signUpFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required()
});
