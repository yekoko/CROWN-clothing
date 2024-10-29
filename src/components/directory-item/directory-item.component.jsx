import { useNavigate } from "react-router-dom";
import {
  DirectoryContainer,
  Body,
  BackgroundImage,
} from "./directory-item.style";

const Category = ({ category }) => {
  const { title, imageUrl, route } = category;
  const naviagate = useNavigate();
  const onNavigateHandler = () => naviagate(route);
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default Category;
