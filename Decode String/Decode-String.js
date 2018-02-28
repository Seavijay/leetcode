/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(!s.includes('[')){return s}
    function h(a){
        let front = a.slice(0,a.lastIndexOf('[')),
            cur =a.slice(a.lastIndexOf('[')+1,a.indexOf(']',a.lastIndexOf('['))),
            after=a.slice(a.indexOf(']',a.lastIndexOf('['))+1),
        n=parseInt(front.match(/[0-9]+$/)[0])
        front = front.slice(0,front.match(/[0-9]+$/)['index'])
        a=front
        while(n>0){
            a+=cur
            --n
        }
        a+=after
        if(a.includes('[')){
            h(a)
        }else{
            s=a
        }
    }
    h(s)
    return s
};