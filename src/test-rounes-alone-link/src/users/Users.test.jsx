import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Users from './Users';
import { RenderWithRouter } from '../tests/RenderWithRouter';
import AppRouter from '../routs/AppRouter';

jest.mock('axios');

describe("Test App", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv"
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
        },
      ]
    }
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
  test('renders learn react link', async () => {
    axios.get.mockReturnValue(response);

    render(RenderWithRouter(<Users />));
    
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });


  test('test redirect to details page', async() => {
    axios.get.mockReturnValue(response);

    render(RenderWithRouter(<Users />));

    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});