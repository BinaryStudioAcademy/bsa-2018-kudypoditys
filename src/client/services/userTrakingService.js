import cookies from "browser-cookies";
import rand_tocken from "rand-token";

class UserTrackingService {

    getToken() {
        const accessToken = cookies.get("accessToken")

        if (!accessToken) {
            return cookies.get("anonymousToken");
        }

        return cookies.get("accessToken");
    }

    setAnonymousToken() {
        return !cookies.get("anonymousToken") ? cookies.set("anonymousToken", rand_tocken.uid(16)) : null;
    }

    clearAnonymousToken() {
        cookies.erase("anonymousToken");
    }
}

export default new UserTrackingService();

