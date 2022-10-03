import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

//fireEvent - это искуственное событие
//userEvent - близко к пользователю, обрабатывается события нажатия клавиши и тд

describe("Test App", () => {
  test('renders learn react link', () => {
    render(<App />);
  
    //https://testing-library.com/docs/queries/bytext
    const HelloWorld = screen.getByText(/Hello world/i);
  
    //https://testing-library.com/docs/queries/byrole/
    const btn = screen.getByRole('button');
    
    //https://testing-library.com/docs/queries/byplaceholdertext/
    const input = screen.getByPlaceholderText(/input value.../i);
  
    //https://testing-library.com/docs/guide-disappearance/#nottobeinthedocument
    expect(HelloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  
    //https://jestjs.io/docs/expect#tomatchsnapshotpropertymatchers-hint
    expect(input).toMatchSnapshot();
    screen.debug();
  });

  test('renders learn react link query', () => {
    render(<App />);
    
    //https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries
    const hellooWorldEl = screen.queryByText(/hellow2/i);
    
    //https://jestjs.io/docs/expect#tobenull
    expect(hellooWorldEl).toBeNull();
  });

  test('renders learn react link finde', async () => {
    render(<App />);
    screen.debug();

    //https://testing-library.com/docs/example-findbytext/
    const hellooWorldEl = await screen.findByText(/data/i);
    
    //https://testing-library.com/docs/guide-disappearance/#nottobeinthedocument
    expect(hellooWorldEl).toBeInTheDocument();
    screen.debug();
  });

  test('renders learn react link Style', async () => {
    render(<App />);

    //https://testing-library.com/docs/example-findbytext/
    const hellooWorldEl = await screen.findByText(/data/i);
    
    expect(hellooWorldEl).toHaveStyle({color: 'red'});
  });

  test('Click Event fireEvent', async () => {
    render(<App />);

    //https://testing-library.com/docs/queries/bytestid/
    const btn = screen.getByTestId('toggle-btn');

    //https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries
    expect(screen.queryByTestId('toggle-el')).toBeNull();

    //https://testing-library.com/docs/vue-testing-library/cheatsheet/#firing-events
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-el')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-el')).toBeNull();
    
  });

  test('Click Input fireEvent', async () => {
    render(<App />);

    //https://testing-library.com/docs/queries/byplaceholdertext/
    const input = screen.getByPlaceholderText(/input value.../i);

    //https://dev.to/jpblancodb/testing-svelte-components-with-jest-53h3
    expect(screen.queryByTestId('value-el')).toContainHTML('');

    //https://testing-library.com/docs/vue-testing-library/cheatsheet/#firing-events
    fireEvent.input(input, {
      target: {value: '12345'}
    });
    expect(screen.queryByTestId('value-el')).toContainHTML('12345');
    
  });

  test('Click Input userEvent', async () => {
    render(<App />);

    //https://testing-library.com/docs/queries/byplaceholdertext/
    const input = screen.getByPlaceholderText(/input value.../i);

    //https://dev.to/jpblancodb/testing-svelte-components-with-jest-53h3
    expect(screen.queryByTestId('value-el')).toContainHTML('');

    //https://testing-library.com/docs/ecosystem-user-event/#keyboardtext-options
    userEvent.type(input, '09876')
    expect(screen.queryByTestId('value-el')).toContainHTML('09876');
    
  });
})
