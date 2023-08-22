class Heap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], (this.heap[j] = this.heap[j]), this.heap[i]];
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return i * 2 + 1;
  }

  rightChildIndex(i) {
    return i * 2 + 2;
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    while (
      current > 0 &&
      this.heap[current] < this.heap[this.parentIndex(current)]
    ) {
      this.swap(current, this.parentIndex(current));
      current = this.parentIndex(current);
    }
  }

  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let current = 0;
    while (
      (this.leftChildIndex(current) < this.heap.length &&
        this.heap[current] > this.heap[this.leftChildIndex(current)]) ||
      (this.rightChildIndex(current) < this.heap.length &&
        this.heap[current] > this.heap[this.rightChildIndex(current)])
    ) {
      let smallerChildIndex = this.leftChildIndex(current);
      if (
        this.rightChildIndex(current) < this.heap.length &&
        this.heap[this.rightChildIndex(current)] <
          this.heap[this.leftChildIndex(current)]
      ) {
        smallerChildIndex = this.rightChildIndex(current);
      }
      this.swap(current, smallerChildIndex);
      current = smallerChildIndex;
    }
    return min;
  }
}
