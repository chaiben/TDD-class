const sum = require('../initial-test/initial-test');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('user enter only one number ', () => {
    expect(sum(2)).toBe(2);
});
test('user enter only one number ', () => {
    expect(sum()).toBe(null);
});
test('user enter only one number ', () => {
    expect(sum("a", "b")).toBe("Please, enter only numbers");
});
test('user enter only one number ', () => {
    expect(sum("1", "3")).toBe(4);
});
test('user enter only one number ', () => {
    expect(sum(undefined)).toBe("Please, enter only numbers");
});