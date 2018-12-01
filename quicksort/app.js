function partition(arr, lowIdx, highIdx) {
    let pivot = arr[lowIdx];

    let idx = lowIdx + 1;

    for(let i = idx; i <= highIdx; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, idx);
            idx++;
        }
    }

    swap(arr, lowIdx, idx - 1);
    
    return idx - 1;
}

function quickSort(arr, lowIdx, highIdx) {
    if(lowIdx < highIdx) {
        let pivot = partition(arr, lowIdx, highIdx);
        
        quickSort(arr, lowIdx, pivot - 1);
        quickSort(arr, pivot + 1, highIdx);
    }
}


function swap(arr, value1, value2) {
    const temp = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = temp;
}

let arr = [10, 7, 12, 8,11, 23, 454,32, 2, 3, 2, 6];

quickSort(arr, 0, arr.length - 1);