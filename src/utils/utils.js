export const getPageData = (data, pageNo, pageSize) => {
    const begin = pageSize * (pageNo - 1);
    const end = begin + pageSize;
    if (end > data.length) return data.slice(begin);
    return data.slice(begin, end);
}
export const seconds2Date = (seconds) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(seconds);
    return t;
}

export const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export function setUsernameToStorage(username) {
    sessionStorage.setItem("username", username);
}

export function getUsernameFromStorage() {
    let data = sessionStorage.getItem("username");
    return data;
}

export function setJwtToStorage(jwt) {
    sessionStorage.setItem("jwt", jwt);
}

export function getJwtFromStorage() {
    let data = sessionStorage.getItem("jwt");
    return data;
}

export function clearStorage() {
    sessionStorage.clear();
}

export function isAuthenticated() {
    let jwt = getJwtFromStorage();
    return (jwt !== null && jwt !== "");
}
export function mergeConfig(a, b) {
    let a_headers = a.headers, b_headers = b.headers
    if (typeof a_headers === "undefined") a_headers = {}
    if (typeof b_headers === "undefined") b_headers = {}
    let merge_headers = Object.assign(a_headers, b_headers)
    if (Object.entries(merge_headers).length !== 0) {
        return Object.assign(a, b, {
            headers: merge_headers
        })
    }
    return Object.assign(a, b)
}