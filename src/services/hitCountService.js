export function getHitCount() {
    return fetch('/api/hit-count')
        .then(res => res.json())
        .then(data => data.hitCount);
}