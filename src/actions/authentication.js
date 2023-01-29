export const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";
export const LOG_OUT = "LOG_OUT";

export function setAuthenticatedUser(id) {
    return {
        type: SET_AUTHENTICATED_USER,
        authenticatedUserId: id,
    };
}

export function logOut() {
    return {
        type: LOG_OUT,
    };
}