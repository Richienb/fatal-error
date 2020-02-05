/**
 * Throw an uncatchable error.
 * @param error The error to throw.
 * @example
 * ```
 * const fatalError = require("fatal-error");
 *
 * fatalError(new Error("Catch me if you can!"));
 * ```
*/
declare function fatalError(error: Error): void

export = fatalError
