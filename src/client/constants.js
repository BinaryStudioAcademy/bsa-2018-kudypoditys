export const DEV = process.env.NODE_ENV === "development";

export const API_URL = DEV ? "http://127.0.0.1:5000/api/" : "/api/";

export const MAPBOX_TOKEN =
    "pk.eyJ1IjoibG9yZW05NiIsImEiOiJjamt1d3Q4MzkwYm02M3Fxa2NzanN5MjdkIn0.YLiIxBtioSAvAKxBuzTDzw";

export const MAIN_BACKGROUND =
    "https://s3.eu-central-1.amazonaws.com/kudypoditys/img/application/home-background.jpg";
