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
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    // Write your code here
    let str1Freq= new Map();
    let str2Freq= new Map();
    let deletion=0;
    
    for(let x of a){
        if(str1Freq.has(x)){
            str1Freq.set(x,str1Freq.get(x)+1);
        }
        
        else{
            str1Freq.set(x,1);
        }
    }
    console.log(a,str1Freq);
    
        for(let x of b){
        if(str2Freq.has(x)){
            str2Freq.set(x,str2Freq.get(x)+1);
        }
        
        else{
            str2Freq.set(x,1);
        }
    }
    console.log(b,str2Freq);
    
    for(let [key,value] of str1Freq){
        if(str2Freq.has(key)){
            if(!(value===str2Freq.get(key))){
                
                if(value>str2Freq.get(key)){
                    let difference=Math.abs(value-str2Freq.get(key));
                    str1Freq.set(key,value-difference);
                    deletion+=difference;
                }
                
            }
            
        }
        
        else{
            deletion+=value;
            str1Freq.delete(key);
        }
    }
    console.log(deletion,str1Freq);
    for(let [key,value] of str2Freq){
        if(str1Freq.has(key)){
            if(!(value===str1Freq.get(key))){
                
                if(value>str1Freq.get(key)){
                    let difference=Math.abs(value-str1Freq.get(key));
                    str2Freq.set(key,value-difference);
                    deletion+=difference;
                }
                
            }
            
        }
        
        else{
            deletion+=value;
            str2Freq.delete(key);
        }
    }
    console.log(deletion,str2Freq);
    
    return deletion;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
