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

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function freqCount(s){
    let count= new Array(26).fill(0);
    
    for(let i=0; i<s.length; i++){
        
        count[(s.charCodeAt(i))-97]++;
    }
    
    return count;
}

function isValid(s) {
    // Write your code here
    let freqArr= freqCount(s);
    console.log(freqArr);
    
    let current=0,cc=0, change=0;
    
    for(let i=0; i<freqArr.length; i++){
        
        if(freqArr[i]>0){
            if(current===0){
                current=freqArr[i];
                cc=1;
            }
            
            else{
                if(current==freqArr[i]){
                    cc++
                }
                
                else{
                        if(!((change===0) && ((freqArr[i]-1===0||freqArr[i]-1===current))||(cc===1 && current-1===freqArr[i]))){          
                            return "NO"
                        }
                        else{
                            change=1;
                        }
                    }
                }
            }
        }
            
    return "YES";
    }
    


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
