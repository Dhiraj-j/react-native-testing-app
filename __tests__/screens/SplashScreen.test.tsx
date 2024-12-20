import {render, waitFor} from '@testing-library/react-native';
import SplashScreen from '../../src/screens/SplashScreen';
import {
  prepareNavigation,
  resetAndNavigate,
} from '../../src/utils/NavigationUtil.tsx';

jest.mock('../../src/utils/NavigationUtil.tsx', () => ({
  prepareNavigation: jest.fn(),
  resetAndNavigate: jest.fn(),
}));
describe('SplashScreen', () => {
  it('Should render correctly', () => {
    const {getByTestId} = render(<SplashScreen />);
    expect(getByTestId('logo-image')).toBeTruthy();
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('Should call resetAndNavigate', () => {
    render(<SplashScreen />);
    expect(prepareNavigation).toHaveBeenCalled();
  });

  it('Should call resetAndNavigate after 3s', async () => {
    render(<SplashScreen />);
    await waitFor(
      () => {
        expect(resetAndNavigate).toHaveBeenCalledWith('OnBoardingScreen');
      },
      {timeout: 3500},
    );
  });
});
