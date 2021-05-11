import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spy from "./component/Bisec";

it("test Spy", () => {
  render(<Spy/>);
  expect(screen.getByText("Spine")).toBeInTheDocument();
});
