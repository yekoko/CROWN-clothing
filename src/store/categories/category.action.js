// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.reducer";

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_TYPES.SET_CATEGORIES, categoriesArray);

// export const fetchCategoriesStart = () =>
//   createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

// export const fetchCategoriesFailed = (error) =>
//   createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoryArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoryArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
