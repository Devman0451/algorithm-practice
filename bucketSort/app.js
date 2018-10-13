function insertionSort(arr) {
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

function bucketSort(arr, size = 10) {
    const buckets = [], index = [];

    for (let i = 0; i < size; i++) {
        buckets.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        const idx = Math.floor(size * arr[i]);
        if (!index.includes(idx)) {
            index.push(idx);
        }
        buckets[idx].push(arr[i]);
    }

    index.forEach(el => {
        insertionSort(buckets[el])
    });

    return buckets.reduce((acc, curr, idx) => acc.concat(buckets[idx]), []);
}

const c = [.13, .4, .65, .25, .98, .15, .6, .78, .34, .32, .35, .12];
console.log(bucketSort(c));