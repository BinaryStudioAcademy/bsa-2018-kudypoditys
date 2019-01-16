import cookies from "browser-cookies";

class UserTrackingService {

    getUserToken(){
        return cookies.get("accessToken");
    }

    setAnonymousToken(){
        return cookies.set("anonymousToken", 1)
    }

    clearAnonymousToken(){
        cookies.erase("anonymousToken");
    }

    getAnonymousToken(){
        return cookies.get("anonymousToken");
    }
}

export default new UserTrackingService();

