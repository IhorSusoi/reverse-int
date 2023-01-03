module.exports = function reverse (n) {
    let a = n;
    if(a<0)a=a*(-1);
    a = a.toString();
    a = a.split('');
    a = a.reverse();
    a = a.join('');
    return a;
}
