import { compute } from './compute';

// Suite
describe('compute', () => {
    // Spec
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    // Spec
    it('should increment the input if it is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});
