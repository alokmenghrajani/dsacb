const should = require("should");
const { expect } = require("chai");
const quickSort = require("./quick-sort");

describe("quickSort:", function() {
  it("should sort an empty array", function() {
    const array = [];
    quickSort(array);
    expect(array.length).equal(0);
  });

  it("should sort an array", function() {
    const array = [2, 1, 3, 5, 4];
    const result = [1, 2, 3, 4, 5];
    quickSort(array);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });

  it("should sort an array in ascending order", function() {
    const array = [5, 4, 3, 2, 1];
    const result = [1, 2, 3, 4, 5];
    quickSort(array);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });

  it("should sort array in descending order", function() {
    const array = [1, 2, 3, 4, 5];
    const result = [5, 4, 3, 2, 1];
    quickSort(array, (x, y) => y - x);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });
});
