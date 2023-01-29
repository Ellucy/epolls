export const SET_IS_LOADING = "SET_IS_LOADING";

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        isLoading
    };
}