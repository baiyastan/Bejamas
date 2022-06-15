import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartItems from "./reducers/CartReducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import toggleCart from "./reducers/ToggleCartReducerReducer";
import sortProducts from "./reducers/SortProductsReducer";
import orderBy from "./reducers/orderByReducer";
import pagination from "./reducers/paginationReducer";
import currentPage from "./reducers/currentPageReducer";
import categoryFilters from "./reducers/categoryFiltersReducer";
import prices from "./reducers/PricesReducer";
import priceFilter from "./reducers/priceFilterReducer";

const reducer = combineReducers({
  myCart: cartItems,
  cartToggle: toggleCart,
  orderDir: sortProducts,
  sortBy: orderBy,
  pages: pagination,
  currentPage: currentPage,
  categoryFilters: categoryFilters,
  priceFilters: prices,
  priceFilter: priceFilter,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
