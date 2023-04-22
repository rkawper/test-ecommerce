import useApi from "../hooks/useApi";
import "./Header.css";
import Loading from "./Loading";
import { CATEGORIES_URL } from "../consts";
import { useCallback } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";

const Header = () => {
  const { setSelectedCategory } = useCategoryContext();
  const { error, data: categories, isLoading } = useApi(CATEGORIES_URL);
  const selectCategoryHandler = useCallback(
    (category) => setSelectedCategory(category),
    [setSelectedCategory]
  );
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <div>There is some error while loading</div>;
  } else {
    return (
      <>
        {categories.length === 0 ? (
          <Loading />
        ) : (
          <div className="categories">
            {categories.map((category) => (
              <div
                key={category}
                className="category"
                onClick={selectCategoryHandler.bind(this, category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
};

export default Header;
