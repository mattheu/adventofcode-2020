const fs = require('fs')

const data = fs.readFileSync( '01/data.txt', 'utf8' );
const values = data.split( '\n' ).map( v => parseInt( v ) );

function find2Values( _data ) {
	let val1;
	let val2;

	val1 = _data.find( v => {
		val2 = _data.find( vv => {
			return ( v + vv === 2020 );
		} );

		return !! val2;
	} );

	return val1 * val2;
}

function find3Values( _data ) {
	let val1;
	let val2;
	let val3;

	val1 = _data.find( v => {
		val2 = _data.find( vv => {
			val3 = _data.find( vvv => {
				return ( v + vv + vvv === 2020 );
			} );

			return !! val3;
		} );

		return !! val2;
	} );

	return val1 * val2 * val3;
}

const valuesSorted = [ ...values ].sort( ( a, b ) => a - b );

console.log( find2Values( valuesSorted ) );
console.log( find3Values( valuesSorted ) );
