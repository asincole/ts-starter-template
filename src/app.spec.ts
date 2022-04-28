import { add } from './app';

describe('App', () => {
    it('should add two numbers', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
});
