function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        const startIdx = i;
        let idx = i;
        let value = arr[i];
        for(let j = i; j < arr.length; j++) {
            if (arr[j] < value) {
                value = arr[j]
                idx = j;
            }
        }
        let temp = arr[startIdx];
        arr[startIdx] = arr[idx];
        arr[idx] = temp;
    }
}

c1 = [12, 32, 45, 32, 21, 11, 6, 4, 8, 43, 9];
selectionSort(c1);