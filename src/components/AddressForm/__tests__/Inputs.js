import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { addressFormValidator } from "../AddressForm";
import {
  NameInput,
  StreetInput,
  CityInput,
  StateInput,
  ZipInput,
} from "../Inputs";

const renderWithFormik = (Component) =>
  render(
    <Formik
      validationSchema={addressFormValidator}
      initialValues={{
        name: "",
        street: "",
        city: "",
        stateName: "",
        zip: "",
      }}
    >
      <Component />
    </Formik>
  );

describe("<NameInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Formik validationSchema={addressFormValidator}>
        <NameInput />
      </Formik>
    );
    expect(tree).toMatchSnapshot();
  });

  describe("errors", () => {
    it("should show required error", async () => {
      const { getByTestId } = renderWithFormik(NameInput);

      fireEvent.focus(getByTestId("name"));
      fireEvent.blur(getByTestId("name"));

      await waitFor(() =>
        expect(getByTestId("nameError")).toHaveTextContent("Required")
      );
    });

    it("shows special character error", async () => {
      const { getByTestId } = renderWithFormik(NameInput);

      fireEvent.change(getByTestId("name"), { target: { value: "name@" } });
      fireEvent.blur(getByTestId("name"));

      await waitFor(() =>
        expect(getByTestId("nameError")).toHaveTextContent(
          "Numbers and special characters are not allowed"
        )
      );
    });

    it("shows maxlength error", async () => {
      const { getByTestId } = renderWithFormik(NameInput);
      fireEvent.change(getByTestId("name"), {
        target: { value: "name".repeat(8) },
      });
      fireEvent.blur(getByTestId("name"));

      await waitFor(() =>
        expect(getByTestId("nameError")).toHaveTextContent(
          "Must be 30 characters or less"
        )
      );
    });
  });
});

describe("<StreetInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Formik validationSchema={addressFormValidator}>
        <StreetInput />
      </Formik>
    );
    expect(tree).toMatchSnapshot();
  });

  describe("errors", () => {
    it("should show required error", async () => {
      const { getByTestId } = renderWithFormik(StreetInput);
      fireEvent.focus(getByTestId("street"));
      fireEvent.blur(getByTestId("street"));

      await waitFor(() =>
        expect(getByTestId("streetError")).toHaveTextContent("Required")
      );
    });

    it("shows maxlength error", async () => {
      const { getByTestId } = renderWithFormik(StreetInput);
      fireEvent.change(getByTestId("street"), {
        target: { value: "street".repeat(7) },
      });
      fireEvent.blur(getByTestId("street"));

      await waitFor(() =>
        expect(getByTestId("streetError")).toHaveTextContent(
          "Must be 40 characters or less"
        )
      );
    });
  });
});

describe("<CityInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Formik validationSchema={addressFormValidator}>
        <CityInput />
      </Formik>
    );
    expect(tree).toMatchSnapshot();
  });

  describe("errors", () => {
    it("should show required error", async () => {
      const { getByTestId } = renderWithFormik(CityInput);

      fireEvent.focus(getByTestId("city"));
      fireEvent.blur(getByTestId("city"));

      await waitFor(() =>
        expect(getByTestId("cityError")).toHaveTextContent("Required")
      );
    });

    it("shows special character error", async () => {
      const { getByTestId } = renderWithFormik(CityInput);

      fireEvent.change(getByTestId("city"), { target: { value: "city@" } });
      fireEvent.blur(getByTestId("city"));

      await waitFor(() =>
        expect(getByTestId("cityError")).toHaveTextContent(
          "Numbers and special characters are not allowed"
        )
      );
    });

    it("shows maxlength error", async () => {
      const { getByTestId } = renderWithFormik(CityInput);
      fireEvent.change(getByTestId("city"), {
        target: { value: "city".repeat(13) },
      });
      fireEvent.blur(getByTestId("city"));

      await waitFor(() =>
        expect(getByTestId("cityError")).toHaveTextContent(
          "Must be 50 characters or less"
        )
      );
    });
  });
});

describe("<StateInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Formik validationSchema={addressFormValidator}>
        <StateInput />
      </Formik>
    );
    expect(tree).toMatchSnapshot();
  });

  describe("errors", () => {
    it("should show required error", async () => {
      const { getByTestId } = renderWithFormik(StateInput);

      fireEvent.focus(getByTestId("stateName"));
      fireEvent.blur(getByTestId("stateName"));

      await waitFor(() =>
        expect(getByTestId("stateNameError")).toHaveTextContent("Required")
      );
    });

    it("shows special character error", async () => {
      const { getByTestId } = renderWithFormik(StateInput);

      fireEvent.change(getByTestId("stateName"), {
        target: { value: "stateName@" },
      });
      fireEvent.blur(getByTestId("stateName"));

      await waitFor(() =>
        expect(getByTestId("stateNameError")).toHaveTextContent(
          "Invalid State name"
        )
      );
    });

    it("shows maxlength error", async () => {
      const { getByTestId } = renderWithFormik(StateInput);
      fireEvent.change(getByTestId("stateName"), {
        target: { value: "stateName".repeat(2) },
      });
      fireEvent.blur(getByTestId("stateName"));

      await waitFor(() =>
        expect(getByTestId("stateNameError")).toHaveTextContent(
          "Must be 15 characters or less"
        )
      );
    });
  });
});

describe("<ZipInput />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Formik validationSchema={addressFormValidator}>
        <ZipInput />
      </Formik>
    );
    expect(tree).toMatchSnapshot();
  });

  describe("errors", () => {
    it("shows must contain 5 digits error", async () => {
      const { getByTestId } = renderWithFormik(ZipInput);
      fireEvent.change(getByTestId("zip"), { target: { value: "123456" } });
      fireEvent.blur(getByTestId("zip"));

      await waitFor(() =>
        expect(getByTestId("zipError")).toHaveTextContent(
          "Must contain 5 digits"
        )
      );
    });

    it("should show required error", async () => {
      const { getByTestId } = renderWithFormik(ZipInput);
      fireEvent.focus(getByTestId("zip"));
      fireEvent.blur(getByTestId("zip"));

      await waitFor(() =>
        expect(getByTestId("zipError")).toHaveTextContent("Required")
      );
    });
  });
});
