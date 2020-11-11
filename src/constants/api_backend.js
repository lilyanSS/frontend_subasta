const API = "https://subasta-bk.herokuapp.com";
export const PROVIDER_API ="http://lilyansica.pythonanywhere.com";
export const ROUTES = {
    LOGIN: `${API}/users/session/`,
    USER: `${API}/users/personal_info/`,
    BANK_ACCOUNT: `${API}/users/bank_account/`,
    LOGOUT: `${API}/users/logout/`,
    PROVIDER: `${PROVIDER_API}/vehicles/vehicles/`,
    AUCTION:  `${API}/subastas/auction/`,
    AUCTIONS_LAUCHED:`${API}/subastas/list/`,
    CAR_BY_ID:`${API}/subastas/car_by_id/`,
    CREATE_OFFER:`${API}/subastas/create_offer/`,
    MY_OFFERS:`${API}/subastas/my_offers/`

};