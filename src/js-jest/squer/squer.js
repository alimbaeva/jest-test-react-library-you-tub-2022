// const squer = (num) => {
//     return num * num;
// }

const squer = (num) => {
    if(num === 1) {
        return 1;
    }
    return Math.pow(num, 2);
}

module.exports = squer;
