'use strict';
const segments = [[1,9],[4,8],[13,19],[16,19],[3,18],[9,12],[3,11],[11,12],[9,16],[9,17]];
let count = 0;
console.log('segments: ', segments);
function erase(segments) {
  for (let i = 0; i < segments.length - 1; i++) {
    console.log('i: ', i, segments[i]);
    for (let j = i + 1; j < segments.length; j++) {
      console.log('j: ', j, segments[j]);
      if (segments[j][0] < segments[i][1] && segments[j][0] >= segments[i][0] ) {
        console.log(`${segments[j][0]} < ${segments[i][1]} && ${segments[j][0]} >= ${segments[i][0]}`);
        ++count;
        console.log('delete:', segments[j]);
        segments.splice(j, 1);
        console.log('length: ', segments.length, segments);
        erase(segments);
      }
    }
  }
  return count;
};

console.log(erase(segments));
