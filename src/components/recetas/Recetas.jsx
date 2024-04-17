import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { RecipeGrid } from "./RecipeGrid";



export const Recetas = () => {

  const [categories, setCategories] = useState(['Ensaladas']);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const key = '877a5f328a4cd72220dcb0304815d6cb';
  //       const id = 'e0b402a0';
  //       const searchRecipe = 'ensaladas';
  //       const url = `https://api.edamam.com/api/recipes/v2?type=public&type=public&beta=true&app_id=${id}&app_key=${key}&q=${searchRecipe}`;
  //       const resp = await fetch(url);
  //       const data = await resp.json();
  //       setRecetas(data.hits);

  //       const objetoReceta = {
  //         nombre: data.hits[0].recipe.label,
  //         imagen: data.hits[0].recipe.image,
  //         ingredientes: data.hits[0].recipe.ingredientLines,
  //       };

  //       console.log(objetoReceta);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);



  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //console.log(newCategory);
    setCategories([newCategory, ...categories]);

  }


  return (
    <>
      <h1>Recetas</h1>
      

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}

      />
      {
        categories.map( (category) => (
          <RecipeGrid
            key={ category }
            category={category} />
        ))
      }
    </>
  );
};
