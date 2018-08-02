import { API_URL } from 'client/constants';

export function getHitCount() {
    return fetch(API_URL + 'hit-count')
        .then(res => res.json())
        .then(data => data.hitCount);
}