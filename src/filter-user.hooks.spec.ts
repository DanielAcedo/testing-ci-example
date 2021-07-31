import { renderHook, act } from '@testing-library/react-hooks';
import * as api from './api';
import { useFilterUsers } from './filter-user.hooks';

describe('useFilterUsers specs', () => {
  it('should call getUsersByFilter and update users when it feeds filter equals "doe"', async () => {
    // Arrange
    const filter = 'doe';
    const getUsersByFilterStub = jest.spyOn(api, 'getUsersByFilter');
    getUsersByFilterStub.mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useFilterUsers(filter)
    );

    // Assert
    expect(result.current.users).toEqual([]);

    await waitForNextUpdate();
    expect(result.current.users).toEqual(['John Doe', 'Jane Doe']);
    expect(getUsersByFilterStub).toHaveBeenCalledWith(filter);
  });
});
