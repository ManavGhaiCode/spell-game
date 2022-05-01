module.exports.getRandSpellings = obj => {
    let arr = [];
    let keys = Object.keys(obj);

    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);
    arr.push(keys[Math.floor( (Math.random() * 102217) + 1) ]);

    return arr;
}