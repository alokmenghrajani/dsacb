const should = require("should");
const { expect } = require("chai");
const LinkedList = require("./linked-list");

describe("Linked List", function() {
  it("should create a empty linked list", function() {
    const list = new LinkedList();
    expect(list.isEmpty).equal(true);
  });

  it("should convert list to array", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    expect(array).deep.equal(list.toArray());
  });

  it("should remove key from linked list", function() {
    const list = new LinkedList();
    const data = 30;
    list.push(20);
    list.push(30);
    list.push(40);
    list.remove(data);
    const array = list.toArray();
    expect(array.indexOf(data)).equal(-1);
  });

  it("should remove node from linked list at position `n`", function() {
    const list = new LinkedList();
    const data = 30;
    const position = 1;
    list.push(20);
    list.push(30);
    list.push(40);
    list.removeAtPosition(position);
    const array = list.toArray();
    expect(array.indexOf(data)).equal(-1);
  });

  it("should return length of linked list", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    expect(array.length).equal(list.length);
  });

  it("should return size of linked list", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    expect(array.length).equal(list.size());
  });

  it("should return true cause key is present", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    expect(list.contains(3)).equal(true);
  });

  it("should return false cause key is not present", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    expect(list.contains(-3)).equal(false);
  });

  it("should swap two keys", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    list.swap(2, 5);
    expect(list.toArray()).deep.equal([1, 5, 3, 4, 2, 6]);
  });

  it("should return node", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    const n = list.getNodeRecursive(2);
    expect(n).equal(3);
  });

  it("should return middle node", function() {
    const array = [1, 2, 3, 4, 5, 6];
    const list = array.reduce((list, element) => {
      list.push(element);
      return list;
    }, new LinkedList());
    const n = list.getMiddleNode();
    expect(n).equal(4);
  });
});
