const { Stack } = require("./index.js");

describe("stack", () => {
  it("should initialise", () => {
    const stack = new Stack();

    expect(stack.size).toEqual(0);
    expect(stack.first).toEqual(null);
    expect(stack.last).toEqual(null);
  });

  it("should create a new node when push is called", () => {
    const stack = new Stack();

    stack.push("first item");
    stack.push("second item");

    expect(stack.first).toEqual({
      next: { value: "first item", next: null },
      value: "second item",
    });
    expect(stack.last).toEqual({
      next: null,
      value: "first item",
    });
  });

  it("should correctly remove the first node when pop is called", () => {
    const stack = new Stack();

    stack.push("first item");
    stack.push("second item");

    stack.pop();

    expect(stack.first).toEqual({
      next: null,
      value: "first item",
    });
  });
});
