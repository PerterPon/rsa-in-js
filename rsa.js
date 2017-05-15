
/*
  rsa
  Author: yuhan.wyh<yuhan.wyh@alibaba-inc.com>
  Create: Mon May 15 2017 09:21:42 GMT+0800 (CST)
*/

"use strict";

//判断是否为质数
function isPrimeNumber(v) {
  var s = Math.floor(Math.sqrt(v));
  for (var i = s; i > 1; i--) if (v % i == 0) return false;
  return true;
}

//获取指定范围内的质数集合
function getPrimeNumber(min, max) {
  if (min > max) { var t = max; max = min; min = t;}
  var rst = [];
  for (var i = Math.max(2, min) ; i <= max; i++) if (isPrimeNumber(i)) rst.push(i);
  return rst;
}

// 随机从数组中获取两个成员
function getRandomNumberFromArray( primeNumbers ) {

  let len = primeNumbers.length;
  let randomNumber = Math.floor( Math.random() * len );

  return primeNumbers[ randomNumber ];

}

// 获取P和Q
function getPandQ() {
  // 获取100到10000之间的所有质数，作为备选
  let primeNumbers = getPrimeNumber( 100, 300 );

  let p = getRandomNumberFromArray( primeNumbers );
  let q = getRandomNumberFromArray( primeNumbers );

  while( p === q ) {
    q = getRandomNumberFromArray( primeNumbers );
  }

  return [ p, q ];

}

// 扩展欧几里得算法
function eea( a, b ) {

  if ( 0 === b ) {
    return {
      x : 1,
      y : 0
    }
  } else {
    let result = eea( b, a % b );
    let x = result.x;
    let y = result.y;
    let q = result.q;

    let mx = y;
    let my = x - ( ( a - ( a % b ) ) / b ) * y;

    return { x : mx, y : my };
  }
}

function main() {

  // 获取PQ
  let pq = getPandQ();

  let p = pq[ 0 ];
  let q = pq[ 1 ];
  let n = p * q;
  let totientN = ( p - 1 ) * ( q - 1 );
  let e = 65537;

  let d = eea( e, totientN ).x;

  console.log( `public key n: ${n}, e: ${e}` );
  console.log( `private key n: ${n}, d: ${d}` );
}

main();
