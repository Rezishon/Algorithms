export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                replace(j + 1, j, arr);
            }
        }
    }
}

function replace(i: number, j: number, arr: number[]): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
