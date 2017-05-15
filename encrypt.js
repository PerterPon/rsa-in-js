
/*
  encrypt
  Author: yuhan.wyh<yuhan.wyh@alibaba-inc.com>
  Create: Mon May 15 2017 11:47:49 GMT+0800 (CST)
*/

"use strict";

let BigNumber = require( 'bignumber.js' );

let n = process.argv[ 2 ];
let e = process.argv[ 3 ];
let clearText = process.argv[ 4 ];

let bigN = new BigNumber( clearText );

let encrypted = bigN.pow( e ).mod( n );

console.log( encrypted.toString() );
