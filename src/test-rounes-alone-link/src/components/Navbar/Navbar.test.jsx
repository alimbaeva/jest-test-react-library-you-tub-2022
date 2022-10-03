import { render, screen } from "@testing-library/react";
import usersEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
// import RenderWithRouter from "../../tests/RenderWithRouter";
import { MemoryRouter } from "react-router-dom";

describe('Navbar links test', () => {
    
    test('render learn reakt link aboutLink', async () => {
        // render(RenderWithRouter(<Navbar />));
        render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
        const aboutLink = screen.getByTestId('about-link');
        const mainLink = screen.getByTestId('main-link');
        const usersLink = screen.getByTestId('users-link');

        usersEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        usersEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        usersEvent.click(usersLink);
        expect(screen.getByText('users-page')).toBeInTheDocument();
    })
    // test('render learn reakt link mainLink', () => {
    //     render(RenderWithRouter(<Navbar />));
    //     const mainLink = screen.getByTestId('main-link');

    //     usersEvent.click(mainLink);
    //     expect(screen.getByTestId('main-page')).toBeInTheDocument();
    // })
    // test('render learn reakt link usersLink', () => {
    //     render(RenderWithRouter(null, '/users'));
    //     const usersLink = screen.getByTestId('users-link');

    //     usersEvent.click(usersLink);
    //     expect(screen.getByText('users-page')).toBeInTheDocument();
    // })
});