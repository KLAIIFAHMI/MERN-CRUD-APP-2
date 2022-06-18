const isEmpty = (value) => 
value === null || value === undefined
|| typeof(value) === "object" && Object.keys(value).length === 0 // Object.keys(value)  return an array with all keys (without values)
|| typeof(value) === "string" && value.trim().length === 0  // The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).


module.exports = isEmpty;