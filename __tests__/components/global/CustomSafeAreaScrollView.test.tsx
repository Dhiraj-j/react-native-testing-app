import {fireEvent, render} from '@testing-library/react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import {Text} from 'react-native';

describe('CustomSafeAreaScrollView', () => {
  it('should render children correctly', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>Test child</Text>
      </CustomSafeAreaScrollView>,
    );
    expect(getByText('Test child')).toBeTruthy();
  });
});
