import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';

let schema = Yup.object({
  type: Yup.string(),
  category: Yup.string().when('type', ([type], schema) => {
    return type === 'EXPENSE' ? schema.required('is required') : schema;
  }),
});

const MySelect = ({ field, form, ...props }) => {
  console.log('props', props, form, field);
  const { options } = props;
  return (
    <Select
      options={options}
      name={field.name}
      value={
        options ? options.find(option => option.value === field.value) : ''
      }
      onChange={option => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
    />
  );
};

const MainPage = () => {
  return (
    <Formik
      initialValues={{ type: 'EXPENSE', count: '', category: '' }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('SUBMIT', values);
      }}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <Form>
          {/* <Field name="type" value={values.type} /> */}
          <input type="hidden" name="type" value={values.type} />

          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="INCOME"
                checked={values.type === 'INCOME'}
                onChange={handleChange}
              />
              <span
                style={{
                  color: values.type === 'INCOME' ? '#FFB627' : '#e50e0e99',
                }}
              >
                Income
              </span>
            </label>
          </div>
          {errors.type && touched.type ? <div>{errors.type}</div> : null}
          <Field name="count" value={values.count} />
          {errors.count && touched.count ? <div>{errors.count}</div> : null}
          <Field
            name="category"
            value={values.category}
            placeholder="select"
            component={MySelect}
            options={[
              {
                value: 'products',
                label: 'products',
                id: 'products',
              },
              {
                value: 'clothes',
                label: 'clothes',
                id: 'clothes',
              },
              {
                value: 'donate',
                label: 'donate',
                id: 'donate',
              },
            ]}
          />
          {errors.category && touched.category ? (
            <div>{errors.category}</div>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MainPage;
