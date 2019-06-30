console.log('1. Find Shortest');

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (s) => {
  return Math.min(...s.split(" ").map(s => s.length));
}

console.log('findShort("bitcoin take over the world maybe who knows perhaps"): ', findShort("bitcoin take over the world maybe who knows perhaps"));
