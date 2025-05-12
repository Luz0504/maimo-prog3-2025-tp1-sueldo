import React from 'react'
import RecipeCard from '@/app/components/RecipeCard'
import parsedData from "@/data/recipes";

const RecipesGrid = () => {
  console.log(parsedData);
  return (
    <div className='recipes-grid'>
      
      {parsedData.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image}/>
          ))}
          
    </div>
  );
};


export default RecipesGrid