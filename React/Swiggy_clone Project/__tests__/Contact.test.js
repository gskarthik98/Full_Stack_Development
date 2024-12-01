import { render, screen } from "@testing-library/react";
import { Contact_page } from "../src/Contact";
import '@testing-library/jest-dom';


test("Should render the contact page", () => {
    render(<Contact_page />);
    const result = screen.getByText("Contact Us");
    expect(result).toBeInTheDocument();
});
