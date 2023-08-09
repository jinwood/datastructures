class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.next = null;
  }
}

class ChainHashTable {
  constructor() {
    this.slots = 10;
    this.size = 0;
    this.bucket = [];

    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
  }

  hash(key) {
    let index = key % this.slots;
    return index;
  }

  insertEntry(key, value) {
    let index = this.hash(key);

    if (this.bucket[index] === null) {
      this.bucket[index] = new HashEntry(key, value);
      this.size++;
    } else {
      let currentNode = this.bucket[index];
      let prevNode = null;

      while (currentNode !== null) {
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = new HashEntry(key, value);
      this.size++;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

module.exports = {
  ChainHashTable,
};
