/* task compare the triplets
I solved the problem (ws.write(result.join(' ') + '\n');) by setting function compareTriplets(a, b) to return results of my variables aCount and bCount separated with ' ' and then setting ws.write to only result.

looking like this:

return (aCount + ' ' + bCount);

and

ws.write(result);
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aCount = 0;
    let bCount = 0;
    let equal = 0;
    for (let i = 0; i < 3; i++) {
        (a[i] > b[i]) ? aCount++ : (b[i] > a[i]) ? bCount++ : equal++;
    };
    return (aCount + ' ' + bCount);
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result);

    ws.end();
}
