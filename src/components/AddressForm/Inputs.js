import React from "react";
import { Field, ErrorMessage } from "formik";

export const NameInput = () => (
  <div>
    <Field
      data-testid="name"
      name="name"
      type="text"
      placeholder="Name"
      className="field"
    />
    <ErrorMessage name="name">
      {(errorMessage) => (
        <div className="error" data-testid="nameError">
          {errorMessage}
        </div>
      )}
    </ErrorMessage>
  </div>
);

export const StreetInput = () => (
  <div>
    <Field
      data-testid="street"
      name="street"
      type="text"
      placeholder="Street"
      className="field"
    />
    <ErrorMessage name="street">
      {(errorMessage) => (
        <div className="error" data-testid="streetError">
          {errorMessage}
        </div>
      )}
    </ErrorMessage>
  </div>
);

export const CityInput = () => (
  <div className="city">
    <Field data-testid="city" name="city" type="text" placeholder="City" className="field" />
    <ErrorMessage name="city">
      {(errorMessage) => <div className="error" data-testid="cityError">{errorMessage}</div>}
    </ErrorMessage>
  </div>
);

export const StateInput = () => (
  <div className="stateName">
    <Field data-testid="stateName" name="stateName" type="text" placeholder="State" className="field" />
    <ErrorMessage name="stateName">
      {(errorMessage) => <div className="error" data-testid="stateNameError">{errorMessage}</div>}
    </ErrorMessage>
  </div>
);

export const ZipInput = () => (
  <div className="zip">
    <Field data-testid="zip" name="zip" type="text" placeholder="Zip" className="field" />
    <ErrorMessage name="zip">
      {(errorMessage) => <div className="error" data-testid="zipError">{errorMessage}</div>}
    </ErrorMessage>
  </div>
);
