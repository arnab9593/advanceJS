function searchParams(url, param) {
    let u = new URL(url);
    let params = new URLSearchParams(u.search);
    let f = params.get('foo');
    return f;
}

export default searchParams