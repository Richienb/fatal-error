"use strict"

const nextTick = require("next-tick")

module.exports = (error) => {
	nextTick(() => {
		throw error
	})
}
