const {performance} = require('perf_hooks');
var t0 = performance.now()
anagrambyusingsort('ababababababababababaccca', 'ababababababababababacccc') // <---- The function you're measuring time for 
var t1 = performance.now()
console.log("Call to dual sort  took " + (t1 - t0) + " milliseconds.")

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr}

function checkindex(swap1, swap2) {
    let output
    for (let i = 0; i < swap1.length; i++) {
        if (swap1[i] != swap2[i]) {
            output = false
            break
        }
        else {output = true}
    }
    return output
}

function anagrambyusingsort(s1, s2) {
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    let swap1 = sort(arr1)
    let swap2 = sort(arr2)
    let output = checkindex(swap1, swap2)
    console.log("anagrambyusingsort",output)
}

// anagrambyusingsort('abac', 'aabc')

 