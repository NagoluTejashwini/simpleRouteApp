import { CustomPipe } from './custom-pipe';

describe('CustomPipe', () => {
  it('should create an instance', () => {
    expect(new CustomPipe()).toBeTruthy();
  });
  it('my custome pipe for string', () => {
    let mockOutput = 'Ram...'
    expect(new CustomPipe().transform('Ramesh')).toEqual(mockOutput);
  });
});
