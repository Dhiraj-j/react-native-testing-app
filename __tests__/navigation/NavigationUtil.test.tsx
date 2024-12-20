import {CommonActions, StackActions} from '@react-navigation/native';
import {
  goBack,
  navigate,
  navigationRef,
  prepareNavigation,
  push,
  resetAndNavigate,
} from '../../src/utils/NavigationUtil';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    createNavigationContainerRef: jest.fn(() => ({
      isReady: jest.fn().mockReturnValue(true),
      dispatch: jest.fn(),
    })),
    CommonActions: {
      navigate: jest.fn(),
      goBack: jest.fn(),
      reset: jest.fn(),
    },
    StackActions: {
      push: jest.fn(),
    },
  };
});

describe('Navigation Functions', () => {
  it('should navigate to the correct screen', async () => {
    const routeName = 'TestRoute';
    const params = {id: 1};
    await navigate(routeName, params);
    expect(CommonActions.navigate).toHaveBeenCalledWith(routeName, params);
  });
  it('should push a route', async () => {
    const routeName = 'TestRoute';
    const params = {id: 1};
    await push(routeName, params);
    expect(StackActions.push).toHaveBeenCalledWith(routeName, params);
  });
  it('should reset and navigate to the correct screen', async () => {
    const routeName = 'TestRoute';
    await resetAndNavigate(routeName);
    expect(CommonActions.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{name: routeName}],
    });
  });
  it('should go back', async () => {
    await goBack();
    expect(CommonActions.goBack).toHaveBeenCalled();
  });
  it('should prepare navigation', async () => {
    await prepareNavigation();
    expect(navigationRef.isReady).toHaveBeenCalled();
  });
});
