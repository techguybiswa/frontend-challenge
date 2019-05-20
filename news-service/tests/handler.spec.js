/* eslint-disable no-var */
require('dotenv').config();
const hello = require('../handler').hello; // eslint-disable-line prefer-destructuring

describe('hello', () => {
    const event = {};
    const context = {};
    let resp = {};

    it('should call hello function with success', (done) => {
        const callback = (ctx, data) => {
            console.info(data);
            resp = data;
            done();
        };
        hello(event, context, callback);
        expect(resp.statusCode).toBe(200);
    });
});