let numbers = [1, 3, 5, 7, 9];
let target = 7;

function binarySearch(numer, target) {
    let start = 0
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] == target) {
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, target);
console.log(index);

target = 11;
const result = binarySearch(numbers, target);
console.log(result);