import {
  SET_MOVIES,
  SET_GENRES,
  SET_GENRE,
  SET_TOTAL_PAGES,
  SET_SEARCH,
  SET_SEARCH_VAL,
  SET_PAGE_Decrement,
  SET_PAGE_Increment,
  SET_PAGE,
  SET_PAGE_Total,
  SET_LOADING,
  TOOGLE_DARK,
} from "./actionTypes";

// Import the necessary action types

// Define the initial state
const initialState = {
  movies: [],
  genres:[],
  totalPages: 0,
  search: "",
  searchVal: "",
  page: 1,
  genre:"",
  dark:true,
  loading: false,
};

// Create the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
      case SET_GENRES:
        return {
          ...state,
          genres: action.payload,
        };
        case SET_GENRE:
        return {
          ...state,
          genre: action.payload,
        };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_SEARCH_VAL:
      return {
        ...state,
        searchVal: action.payload,
      };
    case SET_PAGE_Increment:
      return {
        ...state,
        page: state.page + 1,
      };
    case SET_PAGE_Decrement:
      return {
        ...state,
        page: state.page - 1,
      };
    case SET_PAGE_Total:
      return {
        ...state,
        page: state.totalPages,
      };
    case SET_PAGE:
      return {
        ...state,
        page: 1,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TOOGLE_DARK:
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};

export default reducer;
