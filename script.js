// const sum = () => {
//     let v1 = Number(document.getElementById('i1').value);
//     let v2 = Number(document.getElementById('i2').value);

//     let sum = v1 + v2;

//     document.getElementById(sbtn).value = sum;
// }

// document.getElementById('sbtn').addEventListener('click',sum());
const sum = () => {
    let v1 = Number(document.getElementById('i1').value);
    let v2 = Number(document.getElementById('i2').value);

    let res = v1 + v2;

    document.getElementById('sbtn').innerHTML = res;
}

const diff = () => {
    let v1 = Number(document.getElementById('i1').value);
    let v2 = Number(document.getElementById('i2').value);

    let res = v1 - v2;

    document.getElementById('dbtn').innerHTML = res;
}
const mul = () => {
    let v1 = Number(document.getElementById('i1').value);
    let v2 = Number(document.getElementById('i2').value);

    let res = v1 * v2;

    document.getElementById('mbtn').innerHTML = res;
}
const div = () => {
    let v1 = Number(document.getElementById('i1').value);
    let v2 = Number(document.getElementById('i2').value);

    let res = Math.floor(v1 / v2);

    document.getElementById('qbtn').innerHTML = res;
}