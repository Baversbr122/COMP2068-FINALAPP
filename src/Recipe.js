import React from 'react';
import style from './recipe.css';

const Recipe= ({title, calories, image, ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}
export default Recipe;