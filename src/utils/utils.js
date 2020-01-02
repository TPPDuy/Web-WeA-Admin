export const getPageData = (data, pageNo, pageSize) => {
    const begin = pageSize * (pageNo - 1);
    const end = begin + pageSize;
    if(end > data.length) return data.slice(begin);
    return data.slice(begin, end);
}
export const seconds2Date = (seconds) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(seconds);
    return t;
}