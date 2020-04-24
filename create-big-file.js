const fs = require('fs');
const file = fs.createWriteStream('./big-file.log');

for (let i = 0; i <= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida risus volutpat venenatis ultricies. Duis iaculis enim ut venenatis sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lorem sem, accumsan vitae interdum ut, pellentesque in ante. Quisque non dolor vitae nunc tincidunt laoreet.');
};

file.end();