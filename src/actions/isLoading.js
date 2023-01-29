export const SET_MAIN_LOADING = "SET_MAIN_LOADING";

export function setMainLoading(isLoading) {
    return {
        type: SET_MAIN_LOADING,
        isLoading
    };
}