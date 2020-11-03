const API = "http://127.0.0.1:5000";
export const PROVIDER_API ="http://localhost:8000";
export const ROUTES = {
    LOGIN: `${API}/users/session/`,
    USER: `${API}/users/personal_info/`,
    BANK_ACCOUNT: `${API}/users/bank_account/`,
    LOGOUT: `${API}/users/logout/`,
    PROVIDER: `${PROVIDER_API}/vehicles/vehicles/`,
    AUCTION:  `${API}/subastas/auction/`,
    AUCTIONS_LAUCHED:`${API}/subastas/list/`,
    CAR_BY_ID:`${API}/subastas/car_by_id/`

};

