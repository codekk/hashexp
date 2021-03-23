const {performance} = require('perf_hooks');
var t0 = performance.now()
checkanagram('ababababababababababaccca', 'ababababababababababacccc') // <---- The function you're measuring time for 
var t1 = performance.now()
console.log("Call to dual hashmethod took " + (t1 - t0) + " milliseconds.")

function hashingfunction(s){
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        var x = Object.keys(hash)
        if (x.includes(s[i])) {
            hash[s[i]] = hash[s[i]] + 1
        } else {hash[s[i]] = 1}
    }
    return hash
}

function checkanagram(s1, s2) {
    let output = []
    h1 = hashingfunction(s1)
    h2 = hashingfunction(s2)
    for (var key in h1) {
       if(h1[key] !== h2[key]){
           output = false
           break
       } else{output = true}
    }
   console.log("checkanagramoutput" , output)
}
