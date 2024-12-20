import {render, screen} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/CustomButton';
describe('CustomButton', () => {
  it('should render correctly', () => {
    const title = 'Test title';
    const {getByText} = render(
      <CustomButton onPress={() => {}} title={title} />,
    );
    const buttonText = screen.getByText(title);
    expect(buttonText).toBeTruthy();
  });

  it('it should show activity indicator when loading is true', () => {
    const title = 'Test title';
    const {getByTestId} = render(
      <CustomButton onPress={() => {}} title={title} loading={true} />,
    );
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeOnTheScreen();
  });
});
