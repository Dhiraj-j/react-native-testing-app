import {persistStore} from 'redux-persist';
import {RootState, store} from '../../../src/redux/store';
import {
  loginUser,
  registerUser,
  selectUser,
  setUser,
} from '../../../src/redux/reducers/userSlice';

jest.mock('redux-persist', () => {
  const actualPersist = jest.requireActual('redux-persist');
  return {
    ...actualPersist,
    persistStore: jest.fn().mockReturnValue({}),
  };
});

describe('userSlice', () => {
  test('should return the initial state', () => {
    const state = store.getState() as RootState;
    expect(selectUser(state)).toBeNull();
  });
  test('should handle set user', () => {
    const user = {name: 'test', email: 'test@gmail.com'};
    store.dispatch(setUser(user));
    const state = store.getState() as RootState;
    expect(selectUser(state)).toEqual(user);
  });
});

describe('Register user thunk', () => {
  test('should handle successful register', async () => {
    const user = {name: 'test', email: 'test@gmail.com'};
    const action = await store.dispatch(registerUser(user));
    const state = store.getState() as RootState;
    expect(action.type).toBe(registerUser.fulfilled.type);
    expect(selectUser(state)).toEqual(user);
  });

  test('should handle register faliure', async () => {
    const action = await store.dispatch(registerUser({}));
    const state = store.getState() as RootState;
    expect(action.type).toBe(registerUser.rejected.type);
    expect(selectUser(state)).toBeNull();
  });
});

describe('Login user thunk', () => {
  test('should handle successful Login', async () => {
    const user = {password: 'test', email: 'test@gmail.com'};
    const action = await store.dispatch(loginUser(user));
    const state = store.getState() as RootState;
    expect(action.type).toBe(loginUser.fulfilled.type);
    expect(selectUser(state)).toEqual(user);
  });

  test('should handle Login faliure', async () => {
    const action = await store.dispatch(loginUser({}));
    const state = store.getState() as RootState;
    expect(action.type).toBe(loginUser.rejected.type);
    expect(selectUser(state)).toBeNull();
  });
});
