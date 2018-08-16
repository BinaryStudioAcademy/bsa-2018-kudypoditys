import cookies from "browser-cookies";

export function setTokensToCookies(accessToken, refreshToken) {
    cookies.set("accessToken", accessToken);
    cookies.set("refreshToken", refreshToken);
}

export function getTokensFromCookies() {
    return {
        accessToken: cookies.get("accessToken"),
        refreshToken: cookies.get("refreshToken")
    };
}
