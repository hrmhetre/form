import { render, fireEvent, waitFor, findByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

describe("Form Component", () => {
  it("should render form fields and submit", async () => {
    const { getByLabelText } = render(<Form />);

    fireEvent.change(getByLabelText("First Name"), {
      target: { value: "hrishikesh" },
    });
    fireEvent.change(getByLabelText("Last Name"), { target: { value: "Doe" } });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "hrmhetre@gmail.com" },
    });
    fireEvent.change(getByLabelText("Phone Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText("Address"), {
      target: { value: "123 local station" },
    });
    fireEvent.change(getByLabelText("Date of Birth"), {
      target: { value: "2000-06-17" },
    });
    fireEvent.click(getByLabelText("Male"));
    fireEvent.change(getByLabelText("Account Type"), {
      target: { value: "Savings" },
    });
  });
});
