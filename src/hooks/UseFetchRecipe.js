import { useEffect, useState } from "react"
import { GetRecipes } from "../helpers/GetRecipes";



export const UseFetchRecipe = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async () => {
        const newImages = await GetRecipes(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect (() => {
        getImages();
    }, [])


    return {
        images,
        isLoading,
    }
}
