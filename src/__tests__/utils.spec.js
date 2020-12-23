import { parsePrice, getSum, getTotalQuantity } from '@/utils';

describe('utils', () => {
  describe('parsePrice', () => {
    it('should return number when number provided', () => {
      const price = 11.1;

      const result = parsePrice(price);

      expect(result).toBe(price);
    });

    it('should return number parsed from string', () => {
      const price = '11.1';

      const result = parsePrice(price);

      expect(result).toBe(11.1);
    });

    it('should return NaN when stringified number is invalid', () => {
      const price = '11.1';

      const result = parsePrice(price);

      expect(result).toBe(11.1);
    });

    it('should return NaN when object provided', () => {
      const price = { 11: 11 };

      const result = parsePrice(price);

      expect(result).toBe(NaN);
    });

    it('should return NaN when array provided', () => {
      const price = ['11'];

      const result = parsePrice(price);

      expect(result).toBe(NaN);
    });

    it('should return NaN when undefined provided', () => {
      const price = undefined;

      const result = parsePrice(price);

      expect(result).toBe(NaN);
    });
  });

  describe('getSum', () => {
    it('should return total price of products counting their quantities', () => {
      const products = [
        { pid: '1', price: '100' },
        { pid: '2', price: '10' },
        { pid: '3', price: '1' },
      ];
      const quantities = {
        1: { quantity: 3 },
        2: { quantity: 2 },
        3: { quantity: 1 },
      };

      const result = getSum(products, quantities);

      expect(result).toBe(321);
    });

    it('should not add price when quantity is not defined', () => {
      const products = [
        { pid: '1', price: '100' },
        { pid: '2', price: '10' },
        { pid: '3', price: '1' },
      ];
      const quantities = {
        1: { quantity: 3 },
        3: { quantity: 1 },
      };

      const result = getSum(products, quantities);

      expect(result).toBe(301);
    });
  });

  describe('getTotalQuantity', () => {
    it('should count total quantity from quantities object', () => {
      const quantities = {
        1: { quantity: 3 },
        2: { quantity: 2 },
        3: { quantity: 1 },
      };

      const result = getTotalQuantity(quantities);

      expect(result).toBe(6);
    });
  });
});
