
function openRecipe(title, image, category, time, rating, description) {

    document.getElementById("modalRecipeTitle").textContent = title;

    document.getElementById("modalRecipeImage").src = image;

    document.getElementById("modalRecipeCategory").textContent = category;

    document.getElementById("modalRecipeTime").textContent = time;

    document.getElementById("modalRecipeRating").textContent = rating;

    document.getElementById("modalRecipeDescription").textContent = description;


    // Open Bootstrap Modal
    const modal = new bootstrap.Modal(
        document.getElementById("recipeModal")
    );

    modal.show();

}
