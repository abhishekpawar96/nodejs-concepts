

// this is ok
// append/update is allowed
exports.id = 1; 

// this is not ok
// replacing object not allowed
exports = { id : 1};


// this is ok
// replacing module.exports is allowed
module.exports = { id: 1};


// exports is just object reference,
// hence field addition is allowed
// but replacing entire exports object we need to use module.exports
// let exports = module.exports;
