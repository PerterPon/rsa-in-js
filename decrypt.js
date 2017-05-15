
/*
  decrypt
  Author: yuhan.wyh<yuhan.wyh@alibaba-inc.com>
  Create: Mon May 15 2017 11:53:06 GMT+0800 (CST)
*/

"use strict";

let BigNumber = require( 'bignumber.js' );

let n = process.argv[ 2 ];
let d = process.argv[ 3 ];
let encryptText = process.argv[ 4 ];

let bign = new BigNumber( encryptText );

let result = bign.pow( d ).mod( n );

console.log( result.toString() );