const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_REQUEST:
        return {
            ...state,
            loading: true,
            errorMessage: null
        };
        case SEARCH_MOVIES_SUCCESS:
        return {
            ...state,
            loading: false,
            movies: action.payload
        };
        case SEARCH_MOVIES_FAILURE:
        return {
            ...state,
            loading: false,
            errorMessage: action.error
        };
        default:
        return state;
    }
};

export const searchMoviesRequest = () => ({type: SEARCH_MOVIES_REQUEST});
export const searchMoviesSuccess = (movies) => ({type: SEARCH_MOVIES_SUCCESS, payload: movies});
export const searchMoviesFailure = (error) => ({type: SEARCH_MOVIES_FAILURE, payload: error});

export default moviesReducer;