const fs = require('fs')

const data = fs.readFileSync( '02/data.txt', 'utf8' ).split( '\n' ).map( v => v.trim() );

function parseData1( _data ) {
	const regex = /(\d+)-(\d+) (\S+): (\S+)/i;

	return _data.map( line => {
		const matches = line.match( regex );

		if ( ! matches ) {
			return;
		}

		const min = parseInt( matches[1], 10 );
		const max = parseInt( matches[2], 10 );
		const char = matches[3];
		const pass = matches[4];
		const count = pass.split('').filter( _char => _char === char ).length;
		const isValid = count >= min && count <= max;

		return { line, min, max, char, pass, count, isValid };
	} ).filter( v => !! v );
}

function parseData2( _data ) {
	const regex = /(\d+)-(\d+) (\S+): (\S+)/i;

	return _data.map( line => {
		const matches = line.match( regex );

		if ( ! matches ) {
			return;
		}

		const i1 = parseInt( matches[1], 10 ) - 1;
		const i2 = parseInt( matches[2], 10 ) - 1;
		const char = matches[3];
		const pass = matches[4];
		const bits = pass.split('');
		const isValid = ( bits[ i1 ] === char || bits[ i2 ] === char ) && ( bits[ i1 ] != bits[ i2 ] );

		return { line, i1, i2, char, pass, isValid };
	} ).filter( v => !! v );
}

const parsed1 = parseData1( data );
console.log( 'Part 1' );
console.log( 'Total: ', parsed1.length );
console.log( 'Valid: ', parsed1.filter( v => v.isValid ).length );


const parsed2 = parseData2( data );
console.log( 'Part 2' );
console.log( 'Total: ', parsed2.length );
console.log( 'Valid: ', parsed2.filter( v => v.isValid ).length );
