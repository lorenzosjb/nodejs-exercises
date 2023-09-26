const faveFoods = {
    breakfast: 'croissants',
    lunch: 'pasta',
    supper: 'pizza'
};

const icon = {
    croissants: () => "🥐",
    pasta: () => "🍝",
    pizza: () => "🍕",
    other: () => ""
};

function getIconMeal(strMeal) {
    const breakfastIcon = icon[strMeal] ? icon[strMeal]() : icon["other"](); 
    return `${strMeal} ${breakfastIcon}`.trim();
}

function showFavoriteFoodsPhrase(foods) {
    const { breakfast, lunch, supper } = foods;
    return `For breakfast, I only like ${getIconMeal(breakfast)}. For lunch, I love ${getIconMeal(lunch)}, and for supper I want usually want ${getIconMeal(supper)}`;
}

console.log(showFavoriteFoodsPhrase(faveFoods));
