const { ChainHashTable } = require("./index.js");

describe("bucketchain hashtable", () => {
  it("creates with default values", () => {
    const ht = new ChainHashTable();

    const { slots, size, bucket } = ht;

    expect(slots).toEqual(10);
    expect(size).toEqual(0);
    expect(bucket).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});
