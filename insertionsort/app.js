function insertionSort (arr) {
    if (arr.length < 1) return;

    let marker = 1;
    while (marker < arr.length) {
        for (let i = marker; i >= 1; i--) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            } else {
                break;
            }
        }   
        marker++;
    }
}

arr1 = [13, 31, 1, 44, 54, 99, 23, 21, 9];
insertionSort(arr1);