const { Hashtable } = require("./index.js");

describe("hashtable", () => {
  it("creates with default values", () => {
    const ht = new Hashtable();

    expect(ht.values).toEqual({});
    expect(ht.length).toEqual(0);
    expect(ht.size).toEqual(0);
  });

  it("calculates the same hash for a given key", () => {
    const ht = new Hashtable();

    const baseHash = ht.calculateHash("foo");
    const newHash = ht.calculateHash("foo");

    expect(baseHash).toEqual(newHash);
  });

  it("searches a given key", () => {
    const ht = new Hashtable();

    ht.add("Canada", 300);
    ht.add("Germany", 100);
    ht.add("Italy", 50);

    const value = ht.search("Canada");

    expect(value).toEqual(300);
  });
});
