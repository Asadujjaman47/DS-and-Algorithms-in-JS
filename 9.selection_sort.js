const numbers = [23, 54, 12, -8, 90, 2];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

const sorted = selectionSort(numbers);
console.log(sorted);