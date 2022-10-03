const mapArrToString = require('./mapArrToString.js');


describe('validateValue', () => {
    test('Корректное значения', () => {
        expect(mapArrToString([1, 2, 3, 4])).toEqual(['1', '2', '3', '4']);
    });
    test('Корректное значения, без строк', () => {
        expect(mapArrToString([1, 2, 3, 4, null, undefined, 'setter'])).toEqual(['1', '2', '3', '4']);
    });
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    });
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3]);
    });
})

// .toEqual = проверяет содержимое;
// https://jestjs.io/docs/expect#toequalvalue
/**
 * Используйте .toEqual для рекурсивного сравнения всех свойств экземпляров объектов (также известного как «глубокое» равенство). 
 * Он вызывает Object.is для сравнения примитивных значений, что даже лучше для тестирования, чем оператор === строгого равенства.
 */