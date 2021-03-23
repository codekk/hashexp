const {performance} = require('perf_hooks');
var t0 = performance.now()
hashmethod()  // <---- The function you're measuring time for 
var t1 = performance.now()
console.log("Call to dual hashmethod took " + (t1 - t0) + " milliseconds.")

function hashmethod(){
    var s1='ababababababababababaccca'
    var s2='ababababababababababacccc'  
    function hash(s){
        var h={}
        for (i=0;i< s.length;i++){
            if ( Object.keys(h).includes(s[i])){
                h[s[i]]=h[s[i]] +1}
            else{h[s[i]]=1}
          }
        return h
    }
    h1=hash(s1)
    h2=hash(s2)
    function anchk(h1,h1){
        for (i=0;i<Object.keys(h1).length;i++){
            var check="anagram"
            if (h1[Object.keys(h1)[i]] !=h2[Object.keys(h1)[i]]){
                check="Not anagram"
                console.log(check)
                break
            }
            else{check="anagaram"}
        }
        return check
    }
    console.log(anchk(h1,h1))
}
