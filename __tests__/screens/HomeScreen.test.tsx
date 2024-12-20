import {render} from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Testing Complete')).toBeOnTheScreen();
  });
});
