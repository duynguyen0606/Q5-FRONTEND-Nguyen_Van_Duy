import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserSearchBox from './';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
      ]),
  })
) as jest.Mock;

describe('UserSearchBox', () => {
  test('renders UserSearchBox component', () => {
    render(UserSearchBox());
    expect(screen.getByPlaceholderText('Search users...')).toBeInTheDocument();
  });

  test('updates search state on input change', () => {
    render(UserSearchBox());
    const input: HTMLInputElement =
      screen.getByPlaceholderText('Search users...');
    fireEvent.change(input, { target: { value: 'Leanne' } });
    expect(input.value).toBe('Leanne');
  });

  test('displays user items when search is performed', async () => {
    render(UserSearchBox());
    const input = screen.getByPlaceholderText('Search users...');
    fireEvent.change(input, { target: { value: 'Leanne' } });

    await waitFor(() => {
      expect(
        screen.getByText('Leanne Graham - Kulas Light - 1-770-736-8031 x56442')
      ).toBeInTheDocument();
    });
  });
});
