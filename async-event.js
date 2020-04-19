const fs = require('fs');
const EventEmitter = require('events');

let counter = 0;

class WithTime extends EventEmitter {
    execute(asyncFunction, ...args) {
        let id = counter++;
        console.time(`execute ${id}`);
        this.emit('begin', id);
        asyncFunction(...args, (err, data) => {
            if (err) {
                this.emit('error', id, err);
            } else {
                this.emit('data', id, data);
            }
            console.timeEnd(`execute ${id}`);
            this.emit('end', id);
        });
    };
};

const withTime = new WithTime();

withTime.on('begin', id => console.log(`About to execute: ${id}`));
withTime.on('end', id => console.log(`Done with execute: ${id}`));
withTime.on('data', (id, data) => {
    console.log(`Length of ${id}: ${data.length}`);
});
withTime.on('error', (id, err) => console.error(err, id));

withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);
