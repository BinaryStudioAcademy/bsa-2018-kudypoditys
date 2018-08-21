import cookies from "browser-cookies";


class CookieTool {
    setTokens(accessToken, refreshToken, accessExpiryDate, refreshExpiryDate) {
        cookies.set("accessToken", accessToken, {
            expires: new Date(accessExpiryDate)
        });
        cookies.set("refreshToken", refreshToken, {
            expires: new Date(refreshExpiryDate)
        });
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

    clearTokens() {
        cookies.erase("accessToken");
        cookies.erase("refreshToken");
    }
}

export default new CookieTool();
