import {fireEvent, render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('Onboard item', () => {
  const mockOnPressFirst = jest.fn(() => console.log('first button pressed'));
  const mockOnPressSecond = jest.fn(() => console.log('second button pressed'));

  const imageSource = {uri: 'https://www.google.com'};
  const title = 'Test title';
  const description = 'Test description';
  const subTitle = 'Test subtitle';
  const buttonTitleFirst = 'first button';
  const buttonTitleSecond = 'second button';
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly with one button', () => {
    const {getByTestId, getByText} = render(
      <OnboardItem
        imageSource={imageSource}
        title={title}
        subtitle={subTitle}
        buttonTitleFirst={buttonTitleFirst}
        onPressFirst={mockOnPressFirst}
      />,
    );
    const image = getByTestId('background-image');
    expect(getByText(title)).toBeTruthy();
    expect(image).toBeTruthy();
  });

  it('should render correctly with two buttons', () => {
    const {getByTestId, getByText} = render(
      <OnboardItem
        imageSource={imageSource}
        title={title}
        subtitle={subTitle}
        buttonTitleFirst={buttonTitleFirst}
        onPressFirst={mockOnPressFirst}
        buttonTitleSecond={buttonTitleSecond}
        onPressSecond={mockOnPressSecond}
      />,
    );

    const image = getByTestId('background-image');
    expect(getByText(title)).toBeTruthy();
    expect(image).toBeTruthy();
    expect(getByText(subTitle)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByText(buttonTitleSecond)).toBeTruthy();
  });
});
