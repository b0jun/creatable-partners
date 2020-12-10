import {
  LOAD_REQ_CARDS_FAILURE,
  LOAD_REQ_CARDS_REQUEST,
  LOAD_REQ_CARDS_SUCCESS,
} from '../types';

const initialState = {
  reqCards: [],
  loadReqCardsLoading: false,
  loadReqCardsDone: false,
  loadReqCardsError: null,
};

export const loadReqCards = (data) => ({
  type: LOAD_REQ_CARDS_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQ_CARDS_REQUEST:
      return {
        ...state,
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
    default:
      return state;
  }
};
export default reducer;
