import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import ChefBanner from '../ChefBanner/ChefBanner';

const Chef = () => {
    const recipeDetails = useLoaderData();
    // console.log(recipeDetails);
    const { recipes } = recipeDetails;
    return (
        <div>
            <ChefBanner recipeDetails={recipeDetails}></ChefBanner>
            <div className='my-container'>
                <h1 className='text-3xl text-red-600 font-semibold text-center my-3 pt-6'>Specail Dishes</h1>
                <div className='grid grid-cols-1 gap-6 my-8'>
                    {
                        recipes.map(detail => <RecipeDetails
                            key={detail.id}
                            detail={detail}
                        ></RecipeDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;