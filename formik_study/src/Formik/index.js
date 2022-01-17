import React from 'react';
import ReactDOM from 'react-dom';

import { Field, Formik, Form, useField } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const CustomInput = styled.input`
  border-color: ${({ meta }) => (meta.touched && meta.error ? 'red' : 'black')};
`;

const MyTextInput = ({ placeholder, label, ...props }) => {
  const [field, meta, form] = useField(props);

  const handleChange = (e) => {
    field.onChange(e);
    console.log('input');
  };
  return (
    <div>
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <CustomInput
          {...field}
          {...props}
          placeholder={placeholder}
          meta={meta}
          onChange={handleChange}
        />
        {meta.touched && meta.error ? <div className='error'>{meta.error}sss</div> : null}
      </div>
      <input name='mail.domain' label='상호' type='text' />
    </div>
  );
};

const MyTextInput2 = ({ label, ...props }) => {
  const [field, meta, form] = useField(props);

  const handleChange = (e) => {
    handleChange(e);
    console.log('input');
  };
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input onChange={handleChange} meta={meta} {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}sss</div> : null}
    </div>
  );
};

export const SignupForm = () => {
  const onBlur = () => console.log('s');
  const onChange = () => console.log('ssss');
  return (
    <>
      <h1>토스페이먼츠 신청</h1>
      <Formik
        initialValues={{
          대표자: '',
          생년월일: '',
          상호: '',
          사이트주소: '', // added for our checkbox
          사업자유형: '', // added for our select
          이메일: '', // added for our select
        }}
        validationSchema={Yup.object({
          대표자: Yup.string().max(3, 'Must be 3 characters or less').required('Required'),
          생년월일: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          상호: Yup.string().email('Invalid email address').required('Required'),
          사이트주소: Yup.string().email('Invalid email address').required('Required'),
          사업자유형: Yup.string().email('Invalid email address').required('Required'),
          이메일: Yup.string().email('Invalid email address').required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
            .required('Required'),
        })}
        // 벨리데이션 다 통과했을때
        onSubmit={(values, { setSubmitting }) => {
          console.log('submit');
          console.log(values);
          setSubmitting(true);
          // 비동기 들어간다
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validateOnChange={(props) => {
          console.log('change');
          console.log(props);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          } = props;

          return (
            <Form style={{ display: 'block' }}>
              <MyTextInput placeholder='ㄴㄴㄴ' label='대표자' name='대표자' type='text' />
              <MyTextInput2 label='상호' name='상호' type='text' />
              <MyTextInput2 label='사이트주소' name='사이트주소' type='text' />
              <MyTextInput2 label='사업자유형' name='사업자유형' type='text' />
              <MyTextInput2 label='이메일' name='이메일' type='text' />
              <button type='submit'>결제하기</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
