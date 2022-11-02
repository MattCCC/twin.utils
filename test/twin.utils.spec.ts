import { getNextBpValue } from '../src/index';

describe('Next BP value', () => {
  it('should get adjusted next BP value', async () => {
    expect(getNextBpValue('1')).toBe('0.98px');
  });
});
