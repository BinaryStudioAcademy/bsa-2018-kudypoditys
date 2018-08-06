export function prettyNumbers(numbers) {


    return numbers.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
}