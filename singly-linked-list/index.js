class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // removes tail
  pop() {
    if (!this.head) return undefined;

    const current = this.head;
    const newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // removes head
  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // take a value and assign as head
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const counter = 0;
    const current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const previous = this.get(index - 1);
    const temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    const previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }
}

module.exports = {
  SinglyLinkedList,
};
