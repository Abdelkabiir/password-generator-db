
export function padZerosToLength (value) {
    var iValLength= value.toString().length;
    return ((new Array((7) - iValLength).join('0')) + value);
}