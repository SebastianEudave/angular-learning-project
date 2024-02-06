import { CustomNumberPipe } from './custom-number.pipe';

describe('CustomNumberPipe', () => {
  it('Should transform number to detailed value', () => {
    const pipe = new CustomNumberPipe();
    expect(pipe.transform(1, 'hg')).toBe("1 hg");
  });
});
