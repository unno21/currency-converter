import { parseInput } from './parseInput';

describe('parseInput', () => {
  it('should throw error on empty string input', () => {
    expect(() => {
      parseInput('');
    }).toThrow(Error);
  });

  it('should throw error on bad input', () => {
    expect(() => {
      parseInput('EUR to USD');
    }).toThrow(Error);

    expect(() => {
      parseInput('some random junk');
    }).toThrow(Error);

    expect(() => {
      parseInput('2 EUR to     USD');
    }).toThrow(Error);
  });

  it('should parse good input', () => {
    const expectedOutput = { amount: 1, from: 'EUR', to: 'USD' };
    expect(parseInput('1 EUR to USD')).toEqual(expectedOutput);
    expect(parseInput('1 eur to usd')).toEqual(expectedOutput);
    expect(parseInput('1 EUR to usd')).toEqual(expectedOutput);
    expect(parseInput('1 eUr tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1. eUr tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1.0 eUr tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1.0003 eUr tO Usd')).toEqual({ amount: 1.0003, from: 'EUR', to: 'USD' });
  });
});
