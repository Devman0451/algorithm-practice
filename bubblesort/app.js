function bubbleSort(arr) {
    let lastSorted = arr.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < lastSorted; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
        lastSorted--;
    }
}

const arr1 = [21, 32, 11, 9, 45, 55, 100, 54, 22];
bubbleSort(arr1);