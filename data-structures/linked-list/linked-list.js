class LinkedList {
  constructor(data) {
    this.head = data ? LinkedList.toNode(data) : null;
  }

  /**
   * Returns true if linked list is empty.
   */
  get isEmpty() {
    return this.head === null;
  }

  /**
   * Returns length of the linked list.
   */
  get length() {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  /**
   * Returns length of linked list but it uses recursion.
   */
  size(node = this.head) {
    if (node === null) {
      return 0;
    }
    return 1 + this.size(node.next);
  }

  /**
   * Inserts node at the beginning of the list.
   * @param {any} data
   */
  unshift(data) {
    const node = LinkedList.toNode(data);
    if (this.isEmpty) {
      this.head = node;
      return node;
    }
    // New node pointing to head.
    node.next = this.head;
    // Move head to new node.
    this.head = node;
    return node;
  }

  /**
   * Inserts an element at the end of the linked list.
   * @param {any} data
   */
  push(data) {
    const node = LinkedList.toNode(data);
    if (this.isEmpty) {
      this.head = node;
      return node;
    }

    // push to the last node
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  /**
   * Removes the node from list.
   * @param {*} node
   */
  remove(key) {
    let _node = this.head;
    if (_node && _node.data === key) {
      // head node itself contains key
      this.head = _node.next;
      return;
    }
    // search for node and keep track of previous.
    let prev = _node;
    _node = _node.next;
    while (_node && _node.data !== key) {
      prev = _node;
      _node = _node.next;
    }
    // not present.
    if (_node === null) {
      return -1;
    }
    // Unlink node from list.
    prev.next = _node.next;
  }

  /**
   * Removes node at position n.
   * @param {number} n
   */
  removeAtPosition(n) {
    if (this.isEmpty) {
      return;
    }
    if (n === 0) {
      this.head = node.next;
      return;
    }
    let node = this.head;
    let i = 0;
    while (node && i < n - 1) {
      node = node.next;
      i += 1;
    }
    if (node === null || node.next === null) {
      // n is more than number of nodes in the list.
      return -1;
    }
    // unlink node.
    node.next = node.next.next;
  }

  /**
   * Returns true if key is present in the list.
   * @param {*} key
   */
  contains(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  /**
   * Rescursive implementation to find the key.
   * @param {*} node
   * @param {*} key
   */
  containsRecursive(node = this.head, key) {
    if (node === null) {
      false;
    }
    if (node.data === key) {
      return true;
    }
    return this.containsRecursive(node.next);
  }

  /**
   * Prints all the items in the linked list using iteration.
   * @param {Function} logger
   */
  print(logger = console.log) {
    let node = this.head;
    while (node !== null) {
      logger.call(logger, node.data);
      node = node.next;
    }
  }

  /**
   * Prints all the items in the linked list using recursion.
   * @param {Function} logger
   * @param {*} node
   */
  printRecursive(logger = console.log, node = this.head) {
    if (node === null) {
      return;
    }
    logger.call(logger, node.data);
    this.printRecursive(logger, node.next);
  }

  /**
   * Converts list to an array.
   */
  toArray() {
    const array = [];
    let node = this.head;
    while (node !== null) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}
// static members
LinkedList.Node = function(data) {
  this.data = data;
  this.next = null;
};

/**
 * Converts data to node.
 * @param {any} data
 */
LinkedList.toNode = data => new LinkedList.Node(data);

/**
 * Inserts node after a particular node.
 * @param {} prevNode
 * @param {*} data
 */
LinkedList.pushAfter = (prevNode, data) => {
  if (prevNode === null) {
    // push at the end.
    console.log("Previous node can not be null.");
    return;
  }
  const node = LinkedList.toNode(data);
  // new node as next of prev node.
  node.next = prevNode.next;
  // prev node's next is new node.
  prevNode.next = node;
};

module.exports = LinkedList;
