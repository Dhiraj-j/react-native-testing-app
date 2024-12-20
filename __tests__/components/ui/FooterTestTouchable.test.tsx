import {fireEvent, render, screen} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';

describe('FooterTestTouchable', () => {
  it('should render correct text', () => {
    const text = 'Footer';
    render(<FooterTextTouchable onPress={() => {}} text={text} />);
    const footerText = screen.getByText(text);
    expect(footerText).toBeOnTheScreen();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn(() => {
      console.log('button pressed');
    });
    render(<FooterTextTouchable onPress={onPress} text={'Footer'} />);
    const footerView = screen.getByTestId('footer-button');
    fireEvent.press(footerView);
    expect(onPress).toHaveBeenCalled();
  });
});
