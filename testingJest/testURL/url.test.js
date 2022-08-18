let url = "https://example.com?foo=2&bar=2"
import searchParams from "./url.js"

test('Test your url', () => {
    expect(searchParams(url, 'bar')).toBe('2');
});