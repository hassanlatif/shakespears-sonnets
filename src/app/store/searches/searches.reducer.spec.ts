import { searchesReducer, initialState } from './searches.reducer';

describe('Searches Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = searchesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
