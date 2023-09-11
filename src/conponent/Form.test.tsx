import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form Component", () => {
  it("submits the form with valid data", async () => {
    render(<Form />);
    userEvent.type(screen.getByLabelText("First Name"), "hrishikesh");
    userEvent.type(screen.getByLabelText("Last Name"), "mhetre");
    userEvent.type(screen.getByLabelText("Email"), "hrmhetre@.com");
    userEvent.type(screen.getByLabelText("Phone Number"), "989081821");
    //userEvent.selectOptions(screen.getByLabelText("Account Type"), "Savings");
    userEvent.type(screen.getByLabelText("Date of Birth"), "2000-06-01");
    userEvent.click(screen.getByLabelText("Male"));
    userEvent.click(
      screen.getByLabelText("I agree to the Terms and Conditions")
    );
    const fileInput = screen.getByLabelText(
      "Upload File For Address verification"
    );
    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["file contents"], "file.txt", { type: "text/plain" }),
        ],
      },
    });
    userEvent.click(screen.getByText("Register"));
    await waitFor(() => {
      expect(screen.queryByText("First Name is required")).toBeNull();
      expect(screen.queryByText("Last Name is required")).toBeNull();
      expect(screen.queryByText("Invalid email format")).toBeNull();
      expect(screen.queryByText("Phone Number is required")).toBeNull();
      expect(screen.queryByText("Date of Birth is required")).toBeNull();
      expect(screen.queryByText("Gender is required")).toBeNull();
      expect(screen.queryByText("Account Type is required")).toBeNull();
      expect(screen.queryByText("File upload is required")).toBeNull();
      expect(screen.queryByText("Agree terms and condtion")).toBeNull();
    });
  });
});
