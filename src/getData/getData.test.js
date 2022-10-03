const axios = require('axios');
const getData = require('./getData');

// https://jestjs.io/docs/mock-function-api/
jest.mock('axios');

describe('getData', () => {
    
    // https://jestjs.io/docs/jest-object
    let respons;
    beforeEach(() => {
        respons = {
            data: [
                {
                  "id": 1,
                  "name": "Leanne Graham",
                  "username": "Bret",
                  "email": "Sincere@april.biz",
                  "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                      "lat": "-37.3159",
                      "lng": "81.1496"
                    }
                  },
                  "phone": "1-770-736-8031 x56442",
                  "website": "hildegard.org",
                  "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                  }
                },
                {
                  "id": 2,
                  "name": "Ervin Howell",
                  "username": "Antonette",
                  "email": "Shanna@melissa.tv",
                  "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                      "lat": "-43.9509",
                      "lng": "-34.4618"
                    }
                  },
                  "phone": "010-692-6593 x09125",
                  "website": "anastasia.net",
                  "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                  }
                },
                {
                  "id": 3,
                  "name": "Clementine Bauch",
                  "username": "Samantha",
                  "email": "Nathan@yesenia.net",
                  "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                    "geo": {
                      "lat": "-68.6102",
                      "lng": "-47.0653"
                    }
                  },
                  "phone": "1-463-123-4447",
                  "website": "ramiro.info",
                  "company": {
                    "name": "Romaguera-Jacobson",
                    "catchPhrase": "Face to face bifurcated interface",
                    "bs": "e-enable strategic applications"
                  }
                },
            ]
        }
    })
    test('Корректное значения', async () => {

        // https://jestjs.io/docs/mock-function-api/#mockfnmockreturnvaluevalue
        axios.get.mockReturnValue(respons);
        const data = await getData();

        //https://jestjs.io/docs/expect#tohavebeencalledtimesnumber
        expect(axios.get).toBeCalledTimes(1);

        //https://jestjs.io/docs/expect#toequalvalue
        expect(data).toEqual(['1', '2', '3']);

        //https://jestjs.io/docs/expect#tomatchsnapshotpropertymatchers-hint
        expect(data).toMatchSnapshot();
    });
});