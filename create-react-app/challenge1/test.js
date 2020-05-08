const test = require("ava")
const { top, bottom } = require("./func.js")

test("top function should return top 2 numbers over average for [1,2,4,5]", t => {
  t.deepEqual(top([1, 2, 4, 5]), [4, 5])
})

test("top function should return top 2 numbers over average for [1,2,3,4,5]", t => {
  t.deepEqual(top([1, 2, 3, 4, 5]), [4, 5])
})

test("bottom function should return bottom 2 numbers below average for [1,2,4,5]", t => {
  t.deepEqual(bottom([1, 2, 4, 5]), [1, 2])
})

test("bottom function should return bottom 2 numbers below average for [1,2,3,4,5]", t => {
  t.deepEqual(bottom([1, 2, 3, 4, 5]), [1, 2])
})
