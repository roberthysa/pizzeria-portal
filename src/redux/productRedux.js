/* selectors */
export const getAllProducts = ({products}) => products.data;
export const getProductsLoadingState = ({products}) => products.loading;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');

/* action creators */
export const fetchProductsStarted = payload => ({ payload, type: FETCH_ALL_START });
export const fetchProductsSuccess = payload => ({ payload, type: FETCH_ALL_SUCCESS });
export const fetchProductsError = payload => ({ payload, type: FETCH_ALL_ERROR });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_ALL_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      }
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      }
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      }
    }
    default:
      return statePart;
  }
}
