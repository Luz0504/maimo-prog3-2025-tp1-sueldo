import Image from "next/image";
import Button from "@/app/components/Button";

const RecipeCard = ({name, image}) => {
  return (
    <div className='recipe-card'>
        <Image 
        src={image}
        width={300}
        height={300}
        alt={name}
         />
        <h2>{name}</h2>
        <Button />
    </div>
  );
};

export default RecipeCard