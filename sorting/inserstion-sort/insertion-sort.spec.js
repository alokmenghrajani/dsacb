const should = require("should");
const { expect } = require("chai");
const insertionSort = require("./insertion-sort");

describe("insertionSort:", function() {
  it("should sort an empty array", function() {
    const array = [];
    insertionSort(array);
    expect(array.length).equal(0);
  });

  it("should sort an array", function() {
    const array = [12, 11, 13, 5, 6];
    const result = [5, 6, 11, 12, 13];
    insertionSort(array);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });

  it("should sort an array in ascending order", function() {
    const array = [5, 4, 3, 2, 1];
    const result = [1, 2, 3, 4, 5];
    insertionSort(array);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });

  it("should sort array in descending order", function() {
    const array = [1, 2, 3, 4, 5];
    const result = [5, 4, 3, 2, 1];
    insertionSort(array, (x, y) => y - x);
    result.forEach((item, index) => {
      expect(item).equal(array[index]);
    });
  });
});
