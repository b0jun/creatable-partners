import {
  DESELECTED_MATERIAL,
  DESELECTED_METHOD,
  LOAD_REQ_CARDS_FAILURE,
  LOAD_REQ_CARDS_REQUEST,
  LOAD_REQ_CARDS_SUCCESS,
  SELECTED_MATERIAL,
  SELECTED_METHOD,
  TOGGLE_STATUS,
} from '../types';

const initialState = {
  reqCards: [],
  filterdMethod: [],
  filterdMaterial: [],
  filterdStatus: '',
  loadReqCardsLoading: false,
  loadReqCardsDone: false,
  loadReqCardsError: null,
  filterLoading: false,
  filterDone: false,
  filterError: null,
};

export const loadReqCards = (data) => ({
  type: LOAD_REQ_CARDS_REQUEST,
  data,
});

export const selectedMaterial = (data) => ({
  type: SELECTED_MATERIAL,
  data,
});

export const deselectedMaterial = (data) => ({
  type: DESELECTED_MATERIAL,
  data,
});

export const selectedMethod = (data) => ({
  type: SELECTED_METHOD,
  data,
});

export const deselectedMethod = (data) => ({
  type: DESELECTED_METHOD,
  data,
});

export const toggleStatus = (data) => ({
  type: TOGGLE_STATUS,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQ_CARDS_REQUEST:
      return {
        ...state,
        reqCards: [],
        loadReqCardsLoading: true,
        loadReqCardsDone: false,
        loadReqCardsError: null,
      };
    case LOAD_REQ_CARDS_SUCCESS:
      return {
        ...state,
        loadReqCardsLoading: false,
        loadReqCardsDone: true,
        reqCards: [...state.reqCards, ...action.data],
      };
    case LOAD_REQ_CARDS_FAILURE:
      return {
        ...state,
        loadReqCardsLoading: false,
        loadReqCardsError: action.error,
      };
    case SELECTED_METHOD:
      return {
        ...state,
        filterdMethod: state.filterdMethod.concat(action.data),
      };
    case DESELECTED_METHOD:
      return {
        ...state,
        filterdMethod: state.filterdMethod.filter((v) => v !== action.data),
      };
    case SELECTED_MATERIAL:
      return {
        ...state,
        filterdMaterial: state.filterdMaterial.concat(action.data),
      };
    case DESELECTED_MATERIAL:
      return {
        ...state,
        filterdMaterial: state.filterdMaterial.filter((v) => v !== action.data),
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        filterdStatus: action.data,
      };
    default:
      return state;
  }
};
export default reducer;
