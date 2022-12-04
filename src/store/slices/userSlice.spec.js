import userReducer, {
  authRequest,
  authSuccess,
  authError,
  setProfileCardRequest,
  setProfileCardSuccess,
  setProfileCardError,
  getProfileCardRequest,
  getProfileCardSuccess,
  getProfileCardError,
  logout,
  reset,
} from './userSlice';

describe('userReducer', () => {
  describe('authRequest', () => {
    it('returns isLoading true', () => {
      expect(userReducer({}, authRequest())).toEqual({
        isLoading: true,
        error: null,
        isSuccess: false,
      });
    });
  });

  describe('authSuccess', () => {
    it('returns isLoggedIn true', () => {
      expect(userReducer({}, authSuccess('1234'))).toEqual({
        isLoggedIn: true,
        token: '1234',
        isLoading: false,
        isSuccess: true,
      });
    });
  });

  describe('authError', () => {
    it('returns error message and isLoading false', () => {
      expect(userReducer({}, authError('FAIL!'))).toEqual({
        error: 'FAIL!',
        isLoading: false,
      });
    });
  });

  describe('setProfileCardRequest', () => {
    it('returns isLoading true', () => {
      expect(userReducer({}, setProfileCardRequest())).toEqual({
        isLoading: true,
        error: null,
        isSuccess: false,
      });
    });
  });

  describe('setProfileCardSuccess', () => {
    it('returns isSuccess true and sets card', () => {
      expect(
        userReducer({ profile: { card: '' } }, setProfileCardSuccess('1234'))
      ).toEqual({
        profile: { card: '1234' },
        isLoading: false,
        isSuccess: true,
      });
    });
  });

  describe('setProfileCardError', () => {
    it('returns error message and isLoading false', () => {
      expect(userReducer({}, setProfileCardError('FAIL!'))).toEqual({
        error: 'FAIL!',
        isLoading: false,
      });
    });
  });

  describe('getProfileCardRequest', () => {
    it('returns isLoading true', () => {
      expect(userReducer({}, getProfileCardRequest())).toEqual({
        isLoading: true,
        error: null,
        isSuccess: false,
      });
    });
  });

  describe('getProfileCardSuccess', () => {
    it('returns isSuccess true and gets card', () => {
      expect(
        userReducer({ profile: { card: '' } }, getProfileCardSuccess('1234'))
      ).toEqual({
        profile: { card: '1234' },
        isLoading: false,
        isSuccess: true,
      });
    });
  });

  describe('getProfileCardError', () => {
    it('returns error message and isLoading false', () => {
      expect(userReducer({}, getProfileCardError('FAIL!'))).toEqual({
        error: 'FAIL!',
        isLoading: false,
      });
    });
  });

  describe('logout', () => {
    it('returns isLoggedIn false', () => {
      expect(userReducer({}, logout())).toEqual({
        isLoggedIn: false,
        profile: {},
        token: null,
      });
    });
  });

  describe('reset', () => {
    it('returns isSuccess and isLoading false', () => {
      expect(userReducer({}, reset())).toEqual({
        isSuccess: false,
        isLoading: false,
        error: null,
      });
    });
  });
});
