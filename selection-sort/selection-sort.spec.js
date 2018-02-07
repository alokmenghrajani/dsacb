const should = require("should");
const { expect } = require("chai");
const selectionSort = require("./selection-sort");

describe("selectionSort:", function() {
  it("should sort an empty array", function() {
    const sortedArray = selectionSort([]);
    expect(sortedArray.length).equal(0);
  });

  it("should sort an array", function() {
    const array = [2, 1, 3, 5, 4];
    const result = [1, 2, 3, 4, 5];
    const sortedArray = selectionSort(array);
    console.log(sortedArray);
    result.forEach((item, index) => {
      expect(item).equal(sortedArray[index]);
    });
  });
});
