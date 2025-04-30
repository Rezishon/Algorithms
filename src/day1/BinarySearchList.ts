export default function bs_list(haystack: number[], needle: number): boolean {
    var highNum: number = haystack.length;
    var lowNum: number = 0;
    var midNum: number = Number.NaN;

    while (lowNum < highNum) {
        // Supper dupper important the `Math.floor()`
        midNum = Math.floor((highNum + lowNum) / 2);
        if (haystack[midNum] === needle) return true;
        else if (needle > haystack[midNum]) lowNum = midNum + 1;
        else if (needle < haystack[midNum]) highNum = midNum;
    }
    return false;
}
