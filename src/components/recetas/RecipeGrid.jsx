import { UseFetchRecipe } from "../../hooks/UseFetchRecipe"
import { RecipeItem } from "./RecipeItem";



export const RecipeGrid = ({ category }) => {

    const { images, isLoading } = UseFetchRecipe(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image, index ) => (
                        <RecipeItem 
                            key={ index }
                            { ...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
