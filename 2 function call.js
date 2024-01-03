function sum (a, b, cllbck) {
    let result = a + b;
    cllbck(result);
}
function display (data) {
    console.log("result is " + data);
}
function displayPass (data) {
    console.log("data's result is " + data);
}
const displayJS6 = (data) => {
    console.log(`fucntion is js6 ${data}`)
}
sum(2, 3, displayJS6);