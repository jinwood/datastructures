const { BinarySearchTree } = require("./index.js");

describe("binary-search-tree", () => {
  it("creates with default values", () => {
    const bst = new BinarySearchTree();

    expect(bst).toEqual({ root: null });
  });
});
