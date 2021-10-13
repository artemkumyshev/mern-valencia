import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

import { login } from "@actions/users";

import UiTitle from "@ui/UiTitle";
import UiButton from "@ui/UiButton";

import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    phone: Yup.string().required('Обязательное поле "Телефон"'),
  });

  const getResponseData = async (phone) => {
    await dispatch(login(phone));
  };

  return (
    <>
      <UiTitle level={1} text="Авторизация" classes="text-center" />
      <div className={styles.wrapper}>
        <>
          <Formik
            initialValues={{ phone: "" }}
            validationSchema={LoginSchema}
            onSubmit={({ phone }) => {
              getResponseData(phone);
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <label className={styles.form__group}>
                  <span className={styles.form__label}>Телефон</span>
                  <Field
                    name="phone"
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={[
                          "+",
                          "7",
                          " ",
                          "(",
                          /[9]/,
                          /\d/,
                          /\d/,
                          ")",
                          " ",
                          /\d/,
                          /\d/,
                          /\d/,
                          "-",
                          /\d/,
                          /\d/,
                          "-",
                          /\d/,
                          /\d/,
                        ]}
                        type="text"
                        className={styles.form__field}
                      />
                    )}
                  />
                  {errors.phone && touched.phone ? (
                    <div className={styles.form__error}>{errors.phone}</div>
                  ) : null}
                </label>
                <div className={styles.form__actions}>
                  <UiButton text="Войти" />
                </div>
              </Form>
            )}
          </Formik>
        </>
      </div>
    </>
  );
};

Login.propTypes = {};

export default Login;
