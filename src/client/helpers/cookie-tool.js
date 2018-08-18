import cookies from "browser-cookies";

class CookieTool {
    setTokens(accessToken, refreshToken, accessExpiryDate) {
        cookies.set("accessToken", accessToken, {
            expires: new Date(accessExpiryDate)
        });
        cookies.set("refreshToken", refreshToken);
    }

    getTokens() {
        return {
            accessToken: cookies.get("accessToken"),
            refreshToken: cookies.get("refreshToken")
        };
    }

    getAccessToken() {
        return cookies.get("accessToken");
    }

    getRefreshToken() {
        return cookies.get("refreshToken");
    }
}

export default new CookieTool();
