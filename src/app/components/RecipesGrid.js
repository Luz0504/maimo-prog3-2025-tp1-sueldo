'use client'

import {useState, useEffect} from 'react'
import RecipeCard from '@/app/components/RecipeCard'
import parsedData from "@/data/recipes";
import axios from 'axios'
import Loading from '@/app/components/Loading';

const RecipesGrid = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log(parsedData);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://dummyjson.com/recipes?limit=24&skip=0');
        const responseData = response.data.recipes;
        setData(responseData);
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    } 
    getData()
  }, [])

  return (
    <div className='recipes-grid'>
          {!loading &&
            data.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                name={recipe.name} 
                image={recipe.image}
                id={recipe.id}
              />
          ))}

          {loading && <Loading />}
          {error && "hubo un error"}
    </div>
  );
};


export default RecipesGrid;