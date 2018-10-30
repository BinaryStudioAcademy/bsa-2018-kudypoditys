const service = {
    toUnixTimeSeconds: function (date) {
        return Math.floor(
            date.getTime() / 1000
        );
    },

    dateDiff: function (datepart, fromdate, todate) {
        datepart = datepart.toLowerCase();
        var diff = todate - fromdate;
        var divideBy = { w:604800000,
                        d:86400000,
                        h:3600000,
                        n:60000,
                        s:1000 };

        return Math.floor( diff/divideBy[datepart]);
    },

    endOfDayDate: function (actualDate) {
        let x = new Date(
            actualDate.getFullYear(),
            actualDate.getMonth(),
            actualDate.getDate(),
            23,59,59); // 2013-07-30 23:59:59
        return x;
    },

    getEndOfTodayDate: function (){
            return this.endOfDayDate( new Date() );
    }
}

module.exports = service;