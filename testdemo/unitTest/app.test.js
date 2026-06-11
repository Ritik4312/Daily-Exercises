const {add,getFruits,getEmployee} = require('./unittest')

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(add(-5, 7)).toBe(12);
});
test('array contains apple', () => {
    expect(getFruits()).toContain("apple");
});
test('employee object has name property', () => {
    expect(getEmployee()).toHaveProperty('name');
});