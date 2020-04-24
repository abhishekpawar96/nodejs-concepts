const { Readable } = require('stream');

const inStream = new Readable({
    read(size) {
        setTimeout(() => {
            if(this.charCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.charCode++));
        }, 1000);
    }
});

inStream.charCode = 65;
inStream.pipe(process.stdout);

process.on('exit', () => {
    console.error(
        `\ncharacterCode is: ${inStream.charCode}`
    );
});

process.stdout.on('error', process.exit);