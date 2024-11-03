import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getCategories = async () => {
    //   const categoryArray = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categoryArray));
    // };
    // getCategories();
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
