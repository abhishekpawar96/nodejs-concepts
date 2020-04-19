const string = 'touché';
const bufferString = Buffer.from("touché");

// length of characters: 6
console.log(string, string.length);

// no. of byte: 7
console.log(bufferString, bufferString.length);

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder("utf8");
const euroSymbol = ['0xE2', '0x82', '0xAC'];

for (let i = 0; i < euroSymbol.length; i++) {
    const chunk = euroSymbol[i];
    if (chunk != null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString: ', buffer.toString());
        console.log('With StringDecoder: ', decoder.write(buffer));
    }        
};
