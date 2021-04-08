import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./AddressForm.css";
import {
  NameInput,
  StreetInput,
  CityInput,
  StateInput,
  ZipInput,
} from "./Inputs";


export const addressFormValidator = Yup.object({
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .matches(
      /^[aA-zZ\s]+$/,
      "Numbers and special characters are not allowed"
    )
    .required("Required"),
  street: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  city: Yup.string()
    .max(50, "Must be 50 characters or less")
    .matches(
      /^[aA-zZ\s]+$/,
      "Numbers and special characters are not allowed"
    )
    .required("Required"),
  stateName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/^[aA-zZ\s]+$/, "Invalid State name")
    .required("Required"),
  zip: Yup.string()
    .matches(
      /^(?=(\D*\d){5}\D*$)(?=[^ ]* ?[^ ]*$)[\d ]*$/,
      "Must contain 5 digits"
    )
    .required("Required"),
});

const AddressForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        id: 0,
        name: "",
        street: "",
        city: "",
        stateName: "",
        zip: "",
      }}
      validationSchema={addressFormValidator}
      onSubmit={(contact, { resetForm }) => {
        addContact(contact);
        const prev = contact.id;
        resetForm({
          values: {
            id: prev + 1,
            name: "",
            street: "",
            city: "",
            stateName: "",
            zip: "",
          },
        });
      }}
    >
      <Form>
        <div className="form">
          <NameInput />
          <StreetInput />
          <div className="fieldRow">
            <CityInput />
            <StateInput />
            <ZipInput />
          </div>
          <div className="btn-row">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddressForm;
