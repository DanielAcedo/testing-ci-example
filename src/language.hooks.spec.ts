import { renderHook, act } from '@testing-library/react-hooks';
import { useLanguage } from './language.hooks';
import { LanguageProvider } from './language.context';

describe('useLanguage specs', () => {
  it('', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('en');
    });

    // Assert
    expect(result.current.message).toEqual('The current language is: en');
  });
});
