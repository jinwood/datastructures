const { BinarySearchTree } = require("./index.js");

describe("binary-search-tree", () => {
  it("creates with default values", () => {
    const bst = new BinarySearchTree();

    expect(bst).toEqual({ root: null });
  });

  it("should insert a left node when the value is less", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(5);

    expect(bst.root).toEqual({
      value: 10,
      left: { value: 5, left: null, right: null },
      right: null,
    });
  });

  it("should insert a right node when the value is greater", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);

    expect(bst.root).toEqual({
      value: 10,
      left: null,

      right: { value: 20, left: null, right: null },
    });
  });

  it("should insert left and right nodes when appropriate", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(0);

    expect(bst.root).toEqual({
      value: 10,
      left: { value: 0, left: null, right: null },
      right: { value: 20, left: null, right: null },
    });
  });

  it("should insert child nodes", () => {
    const bst = new BinarySearchTree();

    bst.insert(100);
    bst.insert(90);
    bst.insert(80);
    bst.insert(70);
    bst.insert(110);
    bst.insert(150);
    bst.insert(140);

    expect(bst.root).toEqual({
      value: 100,
      left: {
        value: 90,
        left: {
          value: 80,
          left: { value: 70, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: {
        value: 110,
        left: null,
        right: {
          value: 150,
          left: { value: 140, left: null, right: null },
          right: null,
        },
      },
    });
  });
});
