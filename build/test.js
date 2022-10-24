//Test 
import { describe, expect, test } from '@jest/globals';
import { hello } from './main';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(hello()).toBe('Hello World!');
    });
});
//# sourceMappingURL=test.js.map