import {fireEvent, render} from '@testing-library/react-native';
import OnBoardingScreen from '../../src/screens/OnboardingScreen';
import {navigate} from '../../src/utils/NavigationUtil';

jest.mock('../../src/utils/NavigationUtil', () => ({
  navigate: jest.fn(),
}));

describe('HomeScreen', () => {
  it('should render correctly and slide correctly', () => {
    const {getByText} = render(<OnBoardingScreen />);

    const loginButton = getByText('Login');
    const signUpButton = getByText('Sign up');

    fireEvent.press(loginButton);
    expect(navigate).toHaveBeenCalledWith('LoginScreen');

    fireEvent.press(signUpButton);
    expect(navigate).toHaveBeenCalledWith('RegisterScreen');
  });

  it("Should scroll by 1 slide when the 'Next' button is pressed", () => {
    const {getAllByText} = render(<OnBoardingScreen />);
    const nextButton = getAllByText('Next');
    expect(nextButton).toHaveLength(2);
    fireEvent.press(nextButton[0]);
  });
});
