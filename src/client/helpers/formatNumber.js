export default function formatNumber(n) {
    let a = Number(n);
    if (isNaN(a)) {
        return 'Argument is NaN'
    } else {


        return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
    }
}


