import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe('Test Router App', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })

    test('Router test Error', () => {

        render(
            <MemoryRouter initialEntries={['/hfhfhfhfh']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText(/Error PAGE/i)).toBeInTheDocument();
    })
})