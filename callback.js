function sq (a){
    return a*a
}
function cube (a){
    return a*a*a
}
function sumofSq(a,b,fn){
    const a2 = fn(a);
    const b2 = fn(b);
    return a2+b2;
}

console.log(sumofSq(1,2,cube));