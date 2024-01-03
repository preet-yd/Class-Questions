
const before = new Date();
const beforeinMs = before.getTime();


console.log(`before time is ${beforeinMs}`);
function loop() {
    for(let i = 0; i<10000000000 ; i++){
    }
}

loop();

const after = new Date();
const afterinMs = after.getTime();
console.log(`after time is ${afterinMs}`);


console.log(` time is ${afterinMs-beforeinMs}`);
