export function validUrl(url, params, isJson = true) {
    let urlObj = {};
    urlObj.url = url;
    urlObj.params = isJson ? JSON.stringify(params) : params;
    urlObj.headers = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    return urlObj;
}
