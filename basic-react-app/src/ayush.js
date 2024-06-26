function calculateDaysBetweenDates(begin, end) {
    const date1 = new Date(begin);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}

console.log(calculateDaysBetweenDates('2021-01-01', '2021-01-10')); // 10
