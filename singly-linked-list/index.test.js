const { SinglyLinkedList } = require("./index.js");

describe("single linked list", () => {
  it("should initialise", () => {
    const list = new SinglyLinkedList();

    expect(list.length).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  });
});
