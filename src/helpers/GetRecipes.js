

export const GetRecipes = async (category) => {

    const key = '877a5f328a4cd72220dcb0304815d6cb';
    const id = 'e0b402a0';

    const url = `https://api.edamam.com/api/recipes/v2?type=public&type=public&beta=true&app_id=${id}&app_key=${key}&q=${category}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const objRecipes = data.hits.map(hit => ({
        title: hit.recipe.label,
        url: hit.recipe.image,
        ingredients: hit.recipe.ingredientLines,
    }));

    return objRecipes;
}
