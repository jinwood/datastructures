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
    bst.insert(15);

    expect(bst.root).toEqual({
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 15, left: null, right: null },
    });
  });
});
