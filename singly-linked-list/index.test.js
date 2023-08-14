const { SinglyLinkedList } = require("./index.js");

describe("single linked list", () => {
  it("should initialise", () => {
    const list = new SinglyLinkedList();

    expect(list.length).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  });

  it("should create a new value when push is called", () => {
    const list = new SinglyLinkedList();

    list.push("item1");
    list.push("item2");

    expect(list.head).toEqual({
      value: "item1",
      next: { value: "item2", next: null },
    });
    expect(list.tail).toEqual({ value: "item2", next: null });
  });

  it("should correctly remove tail when pop is called", () => {
    const list = new SinglyLinkedList();

    list.push("item1");
    list.push("item2");

    expect(list.head).toEqual({
      value: "item1",
      next: { value: "item2", next: null },
    });

    list.pop();

    expect(list.head).toEqual({
      value: "item1",
      next: null,
    });
    expect(list.tail).toEqual({
      value: "item1",
      next: null,
    });
  });
});
