import {act, fireEvent, render} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';
import Input from '../../../src/components/ui/Input';
describe('input', () => {
  const mockOnChange = jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();
  const placeholder = 'Enter text here';

  it('should render correctly', () => {
    const {getByText, getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        placeholder={placeholder}
        testID="input"
      />,
    );
    expect(getByTestId('input')).toBeTruthy();
  });

  it('should handle multiple blur and focus', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        placeholder={placeholder}
        testID="textInput"
      />,
    );
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});

    expect(mockOnFocus).toHaveBeenCalledTimes(2);
    expect(mockOnBlur).toHaveBeenCalledTimes(2);
  });
  it('should handle Error', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChange}
        placeholder={placeholder}
        testID="textInput"
        error={'Error Text'}
      />,
    );

    expect(getByTestId('errorText')).toHaveTextContent('Error Text');
  });

  it('should call onFocus and setFocus state on input focus', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        placeholder={placeholder}
      />,
    );
    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });

    expect(mockOnFocus).toHaveBeenCalled();
  });

  it('should apply disable style', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChange}
        placeholder={placeholder}
        disabled={true}
      />,
    );
    expect(getByTestId('animatedView')).toHaveStyle({
      pointerEvents: 'none',
    });
  });
  it('should call default onBlur function when not provided ', () => {
    const {getByTestId} = render(
      <Input value="" onChangeText={mockOnChange} placeholder="Enter Text" />,
    );
    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });
  });
  it('should call default onFocus function when not provided ', () => {
    const {getByTestId} = render(
      <Input value="" onChangeText={mockOnChange} placeholder="Enter Text" />,
    );
    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });
  });
});
