import { sonnetsReducer, initialState } from './sonnets.reducer';

describe('Sonnets Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = sonnetsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
