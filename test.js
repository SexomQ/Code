// js test

let j = [8,4,2,-3,3,10,5,6];

function mergeSort(arr) {
    
    if (arr.length > 1) {
        let L = arr.slice(0, arr.length/2);
        console.log(L);
        let R = arr.slice(arr.length/2);
        console.log(R);
        
        L = mergeSort(L);
        R = mergeSort(R);
        
        let result = [];
        let indL = 0;
        let indR = 0;
        
        while (indL < L.length && indR < R.length) {
            if (L[indL] < R[indR]) {
                result.push(L[indL]);
                indL++;
            } else {
                result.push(R[indR]);
                indR++;
            }
        }
        
        while (indL < L.length) {
            result.push(L[indL]);
            indL++;
        }
        
        while (indR < R.length) {
            result.push(R[indR]);
            indR++;
        }
        
        console.log(result);
        return result;
    } else {
        return arr;
    }
}


console.log("Input: " + j);
console.log("Code running....")
console.log("Output: " + mergeSort(j));