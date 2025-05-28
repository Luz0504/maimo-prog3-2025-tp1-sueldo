'use client'

import Image from 'next/image';
import {useState, useEffect} from 'react';
import Loading from '@/app/components/Loading';


const RecipeContainer = ({id}) => {

  const [data, setData] = useState();
  
  useEffect(() => {

      const getData = async () => {

        try {
          const url = `https://dummyjson.com/recipes/${id}`;
          const responseId = await fetch(url);
          const responseDataId = await responseId.json();
          setData(responseDataId);
        } catch (error) {
          console.log('Mi error fue', error);
        }
      } 
        getData();
    }, [id])
    
    return (
    <div>
      {data ? (
         <div>

          <div className='gus'>
            <Image 
              src= "/assets/Gus.png"
              width= "600"
              height= "200"
              alt= 'Gus'
            />
          </div>
          
          <div className='top'>
            <Image src={data.image} width={320} height={300} alt={data.name} />

            <div className='nombreYdatos'>
              <div>
              <h1>{data.name}</h1>
                <p>Dificultad: {data.difficulty}</p>
                <p>Cocina: {data.cuisine}</p>
              </div>
              <div>
                <h2>Detalles</h2>
                <p>Tiempo de preparación: {data.prepTimeMinutes} minutos</p>
                <p>Tiempo de cocción: {data.cookTimeMinutes} minutos</p>
                <p>Porciones: {data.servings}</p>
                <p>Calorías por porción: {data.caloriesPerServing}</p>
              </div>

              <div>
                <h2>Etiquetas</h2>
                <ul>
                  {data.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2>Tipo de comida</h2>
                <ul>
                  {data.mealType.map((meal, index) => (
                    <li key={index}>{meal}</li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>

          <div className='bottom'>
            <div className='ingredientes'>
              <h2>Ingredientes</h2>
              <div>
                <ul>
                  {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className='img-ingr'>
                <Image 
                src= "/assets/Chicken.gif"
                width= "60"
                height= "60"
                alt= 'Gus'
                />
              </div>
            </div>

            <div className='instruYvalo'>
              <div>
                <h2>Instrucciones</h2>
                <ol>
                  {data.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2>Valoraciones</h2>
                <p>Rating: {data.rating}</p>
                <p>Reseñas: {data.reviewCount}</p>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RecipeContainer;