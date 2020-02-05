const fatalError = require(".")
const test = require("ava")

test("main", (t) => {
	t.is(typeof fatalError, "function")
})
