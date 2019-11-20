export const getPageData = (data, pageNo, pageSize) => {
    const begin = pageSize * (pageNo - 1);
    const end = begin + pageSize;
    console.log(begin, end);
    if(end > data.length) return data.slice(begin);
    return data.slice(begin, end);
}