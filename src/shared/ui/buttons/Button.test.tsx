import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders primary button with text and icon", () => {
    const { getByText, getByAltText } = render(<Button type='primary' text='Click me' icon='icon-url' />);
    expect(getByText("Click me")).toBeInTheDocument();
    expect(getByAltText("icon")).toBeInTheDocument();
  });

  it("renders primary button with only text", () => {
    const { getByText } = render(<Button type='primary' text='Click me' />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("renders primary button with only icon", () => {
    const { getByAltText } = render(<Button type='primary' icon='icon-url' />);
    expect(getByAltText("icon")).toBeInTheDocument();
  });

  it("renders secondary button with text and icon", () => {
    const { getByText, getByAltText } = render(<Button type='secondary' text='Click me' icon='icon-url' />);
    expect(getByText("Click me")).toBeInTheDocument();
    expect(getByAltText("icon")).toBeInTheDocument();
  });

  it("renders secondary button with only text", () => {
    const { getByText } = render(<Button type='secondary' text='Click me' />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("renders secondary button with only icon", () => {
    const { getByAltText } = render(<Button type='secondary' icon='icon-url' />);
    expect(getByAltText("icon")).toBeInTheDocument();
  });

  it("renders button with custom class name", () => {
    const { container } = render(<Button type='primary' className='custom-class' />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("calls onClick event when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text='Click me' onClick={onClick} />);
    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders button without text and icon", () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
