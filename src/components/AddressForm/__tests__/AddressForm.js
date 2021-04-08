import React from "react";
import renderer from "react-test-renderer";
import AddressForm from "../AddressForm";

describe("<AddressForm />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AddressForm />);
    expect(tree).toMatchSnapshot();
  });
});
