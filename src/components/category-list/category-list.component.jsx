import CategoryItem from "../directory-item/directory-item.component";
import "./category-list.style.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category} />
        );
      })}
    </div>
  );
};

export default CategoryList;
