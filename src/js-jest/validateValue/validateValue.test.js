const validateValue = require('./validateValue.js');

test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true);
});

describe('validateValue', () => {
    test('Корректное значения', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Меньше коректного', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('ВБольше корректного', () => {
        expect(validateValue(101)).toBe(false);
    });
    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true);
    });
})