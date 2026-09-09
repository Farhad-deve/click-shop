interface ApiError {
    data: {
        message: string;
    };
}

const isApiError = (error : unknown) : error is ApiError => {
    return (
        typeof error === 'object' &&
        error !== null &&
        "data" in error
    );
};

export const getErrorMessage = (error: unknown) : string => {
    if (isApiError(error)) {
        return error.data.message;
    }
    return "Something went wrong. Please try again.";
};