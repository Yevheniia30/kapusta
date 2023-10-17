import { useState } from 'react';
import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';

import {
  TextField,
  IconButton,
  FormControl,
  Button,
  Link,
  ButtonGroup,
  ButtonBase,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const initialValues = {
  // name: '',
  email: '',
  password: '',
};

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    // .max(20, 'Too Long!')
    .required('Required'),
});

// let schema = Yup.object({
//   isBig: Yup.boolean(),
//   count: Yup.number()
//     .when('isBig', {
//       is: true, // alternatively: (val) => val == true
//       then: schema => schema.min(5),
//       otherwise: schema => schema.min(0),
//     })
//     .when('$other', ([other], schema) =>
//       other === 4 ? schema.max(6) : schema
//     ),
// });

// await schema.validate(value, { context: { other: 4 } });

export const UserForm1 = ({ onSubmitHandler, onSubmitLoginHandler }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(null);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    // onSubmit: (values, actions) => {
    //   console.log('values', values, 'actions', actions);
    //   actions.resetForm();
    // },
    onSubmit: (values, actions) => {
      console.log(values);
      if (isSignup) {
        onSubmitHandler(values);
      } else onSubmitLoginHandler(values);
      actions.resetForm();
      setIsSignup(null);
    },
  });

  const handleSub = e => {
    const {
      target: { name },
    } = e;
    e.preventDefault();
    if (name === 'signup') {
      setIsSignup(true);
    }

    console.log(e.target);
    formik.handleSubmit();
  };

  return (
    <StyledForm>
      {/* <FormControl
        sx={{ width: '50ch', marginBottom: '15px' }}
        variant="outlined"
      >
        <TextField
          id="name"
          name="name"
          type="text"
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        {/* <ErrorMessage name="name" /> */}
      {/* </FormControl> */}
      <FormControl
        sx={{ width: '50ch', marginBottom: '15px' }}
        variant="outlined"
      >
        <TextField
          id="email"
          name="email"
          label="Email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </FormControl>
      <FormControl
        sx={{ width: '50ch', marginBottom: '15px' }}
        variant="outlined"
      >
        <TextField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <IconButton
          style={{ position: 'absolute', right: '15px', top: '5px' }}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>

        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
      </FormControl>
      <FormControl
        sx={{ width: '50ch', marginBottom: '15px' }}
        variant="outlined"
      >
        <Button type="submit" name="login" onClick={handleSub}>
          Login
        </Button>
        <Button type="submit" name="signup" onClick={handleSub}>
          Signup
        </Button>
      </FormControl>
    </StyledForm>
  );
};
