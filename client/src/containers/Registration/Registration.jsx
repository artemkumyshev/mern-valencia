import React from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import MaskedInput from "react-text-mask";

import { registration } from "@actions/users";

import UiTitle from "@ui/UiTitle";
import UiButton from "@ui/UiButton";

import styles from "./Registration.module.scss";

const Registration = () => {
  const [info, setInfo] = React.useState();

  const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().required('Обязательное поле "Имя"'),
    lastName: Yup.string().required('Обязательное поле "Фамилия"'),
    phone: Yup.string().required('Обязательное поле "Телефон"'),
  });

  const getResponseData = async (firstName, lastName, phone) => {
    const response = await registration(firstName, lastName, phone);

    setInfo(response);
  };

  return (
    <>
      <UiTitle level={1} text="Регистрация" classes="text-center" />
      <div className={styles.wrapper}>
        {info && info.field === "new" ? (
          <>
            <p>{info.message}</p>
            <Link to="/login">Войти</Link>
          </>
        ) : (
          <>
            {info && info.field === "all" ? <div>{info.message}</div> : ""}
            <Formik
              initialValues={{ firstName: "", lastName: "", phone: "" }}
              validationSchema={RegistrationSchema}
              onSubmit={({ firstName, lastName, phone }) => {
                getResponseData(firstName, lastName, phone);
              }}
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <label className={styles.form__group}>
                    <span className={styles.form__label}>Имя</span>
                    <Field className={styles.form__field} name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div className={styles.form__error}>
                        {errors.firstName}
                      </div>
                    ) : null}
                  </label>
                  <label className={styles.form__group}>
                    <span className={styles.form__label}>Фамилия</span>
                    <Field
                      className={classNames(
                        styles.form__field,
                        errors.phone && touched.phone ? "error" : ""
                      )}
                      name="lastName"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className={styles.form__error}>
                        {errors.lastName}
                      </div>
                    ) : null}
                  </label>
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
                    {info && info.field === "phone" ? (
                      <div className={styles.form__error}>{info.message}</div>
                    ) : (
                      ""
                    )}
                  </label>
                  <div className={styles.form__actions}>
                    <UiButton text="Отправить" />
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </>
  );
};

Registration.propTypes = {};

export default Registration;
