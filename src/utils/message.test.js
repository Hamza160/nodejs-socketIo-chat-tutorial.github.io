const assert = require('assert');
const generateMessage = require('./message');

describe('GenerateMessage', () => {
    it("should generate correct message object", () => {
        let from = 'WDJ',
            text = 'some random text',
            message = generateMessage(from, text);
        
        assert.strictEqual(typeof message.createdAt, 'number');
        // assert.deepStrictEqual(message, { from, text });
    });
});
