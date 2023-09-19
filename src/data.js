export async function getFromUrl(url) {
    const response = await fetch(url, { headers: { accept: "application/json;odata=verbose" } });
    const body = await response?.text();
    alert(JSON.stringify(body));
}