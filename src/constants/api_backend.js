const API = "https://dddf473ead04.ngrok.io";
export const PROVIDER_API ="http://localhost:8000";
export const ROUTES = {
    LOGIN: `${API}/users/session/`,
    USER: `${API}/users/personal_info/`,
    BANK_ACCOUNT: `${API}/users/bank_account/`,
    LOGOUT: `${API}/users/logout/`,
    PROVIDER: `${PROVIDER_API}/vehicles/vehicles/`,
};
