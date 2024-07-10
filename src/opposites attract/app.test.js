
import { isLove } from '../opposites attract/app.js';
import { describe, it, expect } from 'vitest';

describe('isLove', () => {
    it('debería devolver "The number of petals must be an integer" si los pétalos no son enteros', () => {
        expect(isLove(1.5, 4)).toBe('The number of petals must be and integer');
        expect(isLove(2, 3.5)).toBe('The number of petals must be and integer');
    });

    it('debería devolver true si uno de los pétalos es par y el otro impar', () => {
        expect(isLove(1, 4)).toBe(true);
        expect(isLove(0, 1)).toBe(true);
    });

    it('debería devolver false si ambos pétalos son pares o ambos son impares', () => {
        expect(isLove(2, 2)).toBe(false);
        expect(isLove(0, 0)).toBe(false);
    });
});

