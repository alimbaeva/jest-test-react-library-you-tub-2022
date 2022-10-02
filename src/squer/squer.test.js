const squer = require('./squer.js');


describe('validateValue', () => {
    let mockValue;
    // перед каждым тестом вызывается
    beforeEach(() => {
    })
    // вызывается единажды
    beforeAll(() => {
    })
    test('Корректное значения', () => {
        // expect(squer(2)).toBe(4);
        // expect(squer(2)).toBeLessThan(5);
        // expect(squer(2)).toBeGreaterThan(3);
        // expect(squer(2)).not.toBeUndefined();

        const styMathPow = jest.spyOn(Math, 'pow');
        squer(2);
        expect(styMathPow).toBeCalledTimes(1)
    });
    test('Не вызывается', () => {

        const styMathPow = jest.spyOn(Math, 'pow');
        squer(1);
        expect(styMathPow).toBeCalledTimes(0)
    });

     // перед каждым тестом вызывается
     afterEach(() => {
        jest.clearAllMocks();
        // https://jestjs.io/docs/jest-object#jestclearallmocks
    })
    // вызывается единажды
    afterAll(() => {
    })
})

// toBeLessThan
// https://jestjs.io/docs/expect#tobelessthannumber--bigint
// toBeGreaterThan
// https://jestjs.io/docs/expect#tobegreaterthannumber--bigint
// not
// https://jestjs.io/docs/expect#not
// toBeUndefined
// https://jestjs.io/docs/expect#tobeundefined

