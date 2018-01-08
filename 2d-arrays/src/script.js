const inputArr = ['-1 1 -1 0 0 0', '0 -1 0 0 0 0', '-1 -1 -1 0 0 0', '0 -9 2 -4 -4 0', '-7 0 0 -2 0 0', '0 0 -1 -2 -4 0'];
let arr2d = [];

for(const line of inputArr) {
    arr2d.push(line.split(' '));
}

let result = -9 * 7;

for(i = 1; i < 5; i++) {

    for(j = 1; j < 5; j++) {

        const sum = parseInt(arr2d[i][j]) 
        + parseInt(arr2d[i - 1][j - 1]) + parseInt(arr2d[i - 1][j]) + parseInt(arr2d[i - 1][j + 1]) 
        + parseInt(arr2d[i + 1][j - 1]) + parseInt(arr2d[i + 1][j]) + parseInt(arr2d[i + 1][j + 1]);

        if(sum > result) {
            result = sum;
        }
    }
}

console.log(result);
