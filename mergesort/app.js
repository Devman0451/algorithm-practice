function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left[0]);
            left = left.slice(1);
        } else {
            sortedArr.push(right[0]);
            right = right.slice(1);
        }
    }

    while (left.length) {
        sortedArr.push(left.shift());
    }
    
    while (right.length) {
        sortedArr.push(right.shift());
    } 

    return sortedArr;
}

let arr = [12, 43, 22, 9, 34, 87, 4, 1, 3];
let sortedArr = mergeSort(arr);