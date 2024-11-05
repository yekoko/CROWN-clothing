import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../../store/categories/category.reducer";
import CategoryList from "../../components/category-list/category-list.component";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
    const getCategories = async () => {
      try {
        const categoryArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoryArray));
      } catch (error) {
        dispatch(fetchCategoriesFailed(error));
      }
    };
    getCategories();
  }, [dispatch]);
  return <CategoryList />;
};

export default Home;
