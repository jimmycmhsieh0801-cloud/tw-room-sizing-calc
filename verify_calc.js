const assert = require("assert");
const { calcRoomSizing } = require("./app.js");
const r1 = calcRoomSizing(5, 1.0);
assert.strictEqual(r1.kw, 2.9);
assert.strictEqual(r1.dehumLiters, 5);
console.log("ROOM_SIZING_TESTS_PASSED");