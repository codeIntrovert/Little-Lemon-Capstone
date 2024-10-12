import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Booking from "../components/booking";

// Mock console.log for form submission testing
//global.console = { log: jest.fn() };

describe("Booking Component", () => {
    test("renders form fields correctly", () => {
        render(<Booking />);

        // Check if the form and its fields are rendered
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/indoor or outdoor/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/notes to restaurant/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });



    test("shows an error for invalid phone number", async () => {
        render(<Booking />);

        // Fill the form with invalid phone number
        fireEvent.change(screen.getByLabelText(/phone number/i), {
            target: { value: "123" }, // Invalid phone number
        });

        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        // Check if phone number validation error is displayed
        expect(await screen.findByText(/must be a valid phone number/i)).toBeInTheDocument();
    });


});
