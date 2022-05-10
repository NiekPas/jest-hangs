const testNumbers = [1, 2, 3, 4, 5, 6];
const testStrings = ["a", "b", "c", "d", "e", "f", "g"];

describe("Ring instantiation", () => {
    test("Add 1 to each number", () => {
        const arr = [1, 2, 3];
        expect(arr.mal(x => x + 1)).toEqual([2,3,4]);
    });
});
