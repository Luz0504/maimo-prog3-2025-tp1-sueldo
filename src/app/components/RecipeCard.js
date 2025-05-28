import Image from "next/image";
import Link from 'next/link';

const RecipeCard = ({id, name, image}) => {
  return (
    <div className='recipe-card'>
          <Image 
          src={image}
          width={220}
          height={200}
          alt={name}
          />
          <h2>{name}</h2>
          <Link href={`/recipe/${id}`}>
            Ver Más
          </Link>
    </div>
  );
};

export default RecipeCard