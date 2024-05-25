"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CONTACT_FORM as formConfig } from "@/lib/utils";

const validateField = (value, field) => {
  let error;
  if (field.required && !value) {
    error = "Required";
  }
  if (field.validate) {
    const validations = {
      email: (value) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
          ? undefined
          : "Invalid email address",
      phone: (value) =>
        /^\+?[0-9]{7,15}$/i.test(value) ? undefined : "Invalid phone number",
    };
    const validator = validations[field.validate];
    error = validator ? validator(value) : error;
  }
  return error;
};

console.log("formConfig", formConfig.rows);

const DynamicForm_1 = ({}) => {
  const initialValues = formConfig.rows
    .flatMap((row) => row.columns.flatMap((column) => column.fields))
    .reduce((values, field) => {
      values[field.name] = "";
      return values;
    }, {});

  const validate = (values) => {
    const errors = {};
    formConfig.rows
      .flatMap((row) => row.columns.flatMap((column) => column.fields))
      .forEach((field) => {
        const error = validateField(values[field.name], field);
        if (error) {
          errors[field.name] = error;
        }
      });
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="lg:p-4 space-y-4 w-full">
          {/* <h2 className="text-lg font-semibold">{formConfig.formTitle}</h2> */}
          {formConfig.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap -mx-2">
              {row.columns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="px-2 w-full flex flex-col lg:flex-row "
                >
                  {column.fields.map((field) => (
                    <div
                      key={field.name}
                      className={`mb-2 px-2
                      lg:w-${field.width}`}
                    >
                      {/* <label className="block text-sm font-medium text-gray-700">
                        {field.label}
                      </label> */}
                      <Field
                        name={field.name}
                        type={field.type}
                        as={field.type === "textarea" ? "textarea" : "input"}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4"
                        placeholder={field.placeholder}
                        rows={6}
                      />
                      <ErrorMessage
                        name={field.name}
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            className="mx-4 rounded-full  text-white bg-blue-600 hover:bg-blue-700 font-semibold px-5 py-2 lg:px-10 lg:py-4 "
          >
            {formConfig.submitText}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "jared" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props?.values?.name}
              name="name"
            />
            {props?.errors?.name && (
              <div id="feedback">{props.errors.name}</div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm_1;
