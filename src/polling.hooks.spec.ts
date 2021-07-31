import { renderHook } from '@testing-library/react-hooks';
import { usePolling } from './polling.hooks';

describe('usePolling specs', () => {
  it('should return count equals 0 when initialize the hook', async () => {
    // Arrange

    // Act
    const { result, waitForValueToChange } = renderHook(() => usePolling());

    await waitForValueToChange(() => result.current.count === 3, {
      timeout: 2000,
    });

    // Assert
    expect(result.current.count).toEqual(3);
  });

  it('should call clearInterval when it unmounts the component', async () => {
    // Arrange
    const clearIntervalStub = jest.spyOn(window, 'clearInterval');

    // Act
    const { result, unmount } = renderHook(() => usePolling());

    expect(clearIntervalStub).not.toHaveBeenCalled();
    unmount();
    expect(clearIntervalStub).toHaveBeenCalled();
  });
});
