import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { GoDotFill } from 'react-icons/go';
import { FaExclamation } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { onAdd } from '../redux/contactSlise';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <GoDotFill className={css.error} />)
    .max(50, <GoDotFill className={css.error} />)
    .required(<FaExclamation className={css.attention} />),
  number: Yup.number()
    .positive(<GoDotFill className={css.error} />)
    .integer(<GoDotFill className={css.error} />)
    .required(<FaExclamation className={css.attention} />),
});

export default function ContactForm() {
  const lableName = useId();
  const lableNumber = useId();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchema}
      onSubmit={(value, actions) => {
        dispatch(onAdd({ id: nanoid(), ...value }));
        actions.resetForm();
      }}
    >
      <Form className={css.formicForm}>
        <label htmlFor={lableName} className={css.labelForm}>
          Name:
        </label>
        <div className={css.errorMessageBox}>
          <Field type="text" id={lableName} name="name" className={css.inputForm} />
          <ErrorMessage className={css.errorMessage} name="name" component="span" />
        </div>

        <label htmlFor={lableNumber} className={css.labelForm}>
          Number:
        </label>
        <div className={css.errorMessageBox}>
          <Field type="text" id={lableNumber} name="number" className={css.inputForm} />
          <ErrorMessage className={css.errorMessage} name="number" component="span" />
        </div>

        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
