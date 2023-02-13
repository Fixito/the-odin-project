import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteInput from './FavoriteInput.jsx';

describe('Favorite Input', () => {
  it('calls onChange correct number of times', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'Lion');

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });

  it('calls onChange with correct argument(s) on each input', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'Ox');

    expect(onChangeMock).toHaveBeenNthCalledWith(1, 'O');
    expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox');
  });

  test('input has correct values', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'Whale');

    expect(input.value).toBe('Whale');
  });
});
