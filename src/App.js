import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "88c88674";
  const APP_KEY = "b45aeff3caa462507403ba7dacdf94ce";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div onSubmit={getSearch} className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search.."
          value={search}
          onChange={updateSearch}
        ></input>

        <button className="serach-button" type="submit">
          search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
