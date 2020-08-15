import React from "react";
import style from "./recipe.module.css";
const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li className={style.list}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calorie: {props.calorie}</p>
      <img className={style.img} src={props.img} alt={props.img} />
    </div>
  );
};
export default Recipe;
