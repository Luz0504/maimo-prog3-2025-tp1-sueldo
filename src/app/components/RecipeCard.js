import Image from "next/image";
import Button from "@/app/components/Button";

const RecipeCard = ({name, image}) => {
  return (
    <div className='recipe-card'>
          <a href="#"><Image 
          src={image}
          width={220}
          height={200}
          alt={name}
          /></a>
          <h2>{name}</h2>
          <Button />
    </div>
  );
};

export default RecipeCard