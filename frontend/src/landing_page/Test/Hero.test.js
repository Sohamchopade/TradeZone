import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Hero from "../home/Hero";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText("Hero Image");

    expect(heroImage).toBeInTheDocument();
  });

  test("renders heading", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heading = screen.getByText("Invest in everything");

    expect(heading).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", {
      name: "Signup Now",
    });

    expect(button).toBeInTheDocument();
  });

});