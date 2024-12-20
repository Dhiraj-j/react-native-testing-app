import {fireEvent, render} from '@testing-library/react-native';
import CustomHeading from '../../../src/components/global/CustomHeading';
import {goBack} from '../../../src/utils/NavigationUtil';

jest.mock('../../../src/utils/NavigationUtil', () => ({
  goBack: jest.fn(),
}));

describe('CustomHeading', () => {
  it('should render correctly', () => {
    const title = 'Test title';
    const {getByText} = render(<CustomHeading title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  it('Should call goBack when the back button is pressed', () => {
    const {getByTestId} = render(<CustomHeading title={'Test'} />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(goBack).toHaveBeenCalled();
  });
});
