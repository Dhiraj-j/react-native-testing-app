import {MMKV} from 'react-native-mmkv';
import reduxStorage from '../../src/redux/storage';

jest.mock('react-native-mmkv', () => {
  const setMock = jest.fn();
  const getStringMock = jest.fn();
  const deleteMock = jest.fn();

  return {
    MMKV: jest.fn().mockImplementation(() => ({
      set: setMock,
      getString: getStringMock,
      delete: deleteMock,
    })),
    setMock,
    getStringMock,
    deleteMock,
  };
});

describe('redux storage', () => {
  let setMock: jest.Mock;
  let getStringMock: jest.Mock;
  let deleteMock: jest.Mock;

  beforeEach(() => {
    ({setMock, getStringMock, deleteMock} = require('react-native-mmkv'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should set item', async () => {
    const key = 'key';
    const value = 'value';
    await reduxStorage.setItem(key, value);
    expect(setMock).toHaveBeenCalledWith(key, value);
  });
  test('should get item', async () => {
    const key = 'key';
    const result = await reduxStorage.getItem(key);
    expect(result).toBe(result);
    expect(getStringMock).toHaveBeenCalledWith(key);
  });
  test('should delete item', async () => {
    const key = 'key';
    await reduxStorage.removeItem(key);
    expect(deleteMock).toHaveBeenCalledWith(key);
  });
});
