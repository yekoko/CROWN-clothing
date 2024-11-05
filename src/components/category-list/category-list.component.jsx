import { useSelector } from "react-redux";
import CategoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./category-list.style";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Loading from "../loading/loading.component";

const CategoryList = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoriesContainer>
      {isLoading ? (
        <Loading />
      ) : (
        categories &&
        categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })
      )}
    </CategoriesContainer>
  );
};

export default CategoryList;
