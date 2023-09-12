import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form Component", () => {
  it("should validate First Name input", async () => {
    render(<Form />);
    const firstNameInput = screen.getByLabelText("First Name");
    userEvent.type(firstNameInput, "hrishikesh");
    firstNameInput.blur();

    await waitFor(() => {
      expect(screen.queryByText("First Name is required")).toBeNull();
    });
  });

  it("should validate Last Name input", async () => {
    render(<Form />);
    const lastNameInput = screen.getByLabelText("Last Name");
    userEvent.type(lastNameInput, "mhetre");
    lastNameInput.blur();

    await waitFor(() => {
      expect(screen.queryByText("Last Name is required")).toBeNull();
    });
  });

  it("should validate Email input", async () => {
    render(<Form />);
    const emailInput = screen.getByLabelText("Email");
    userEvent.type(emailInput, "hrmhetre@.com");
    emailInput.blur();

    await waitFor(() => {
      expect(screen.queryByText("Invalid email format")).toBeNull();
    });
  });

  it("should validate Phone Number input", async () => {
    render(<Form />);
    const phoneInput = screen.getByLabelText("Phone Number");
    userEvent.type(phoneInput, "989081821");
    phoneInput.blur();

    await waitFor(() => {
      expect(screen.queryByText("Phone Number is required")).toBeNull();
    });
  });

  it("should validate Date of Birth input", async () => {
    render(<Form />);
    const dobInput = screen.getByLabelText("Date of Birth");
    userEvent.type(dobInput, "2000-06-01");
    dobInput.blur();

    await waitFor(() => {
      expect(screen.queryByText("Date of Birth is required")).toBeNull();
    });
  });

  it("should validate Gender selection", async () => {
    render(<Form />);
    const genderInput = screen.getByLabelText("Male");
    userEvent.click(genderInput);

    await waitFor(() => {
      expect(screen.queryByText("Gender is required")).toBeNull();
    });
  });

  it("should validate Agreement checkbox", async () => {
    render(<Form />);
    const agreementInput = screen.getByLabelText(
      "I agree to the Terms and Conditions"
    );
    userEvent.click(agreementInput);

    await waitFor(() => {
      expect(
        screen.queryByText("I agree to the Terms and Conditions")
      ).toBeNull();
    });
  });

  it("should validate File upload", async () => {
    render(<Form />);
    const fileInput = screen.getByLabelText(
      "Upload File For Address verification"
    );
    userEvent.upload(
      fileInput,
      new File(["file contents"], "file.txt", { type: "text/plain" })
    );

    await waitFor(() => {
      expect(screen.queryByText("File upload is required")).toBeNull();
    });
  });
});
