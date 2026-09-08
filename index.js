/* =====================================================
   DAILYDISH - RECIPE MODAL
   ===================================================== */

const recipeCards = document.querySelectorAll(".recipe-card");

const modalImage = document.getElementById("modalRecipeImage");
const modalTitle = document.getElementById("modalRecipeTitle");
const modalDescription = document.getElementById("modalRecipeDescription");
const modalTime = document.getElementById("modalRecipeTime");
const modalRating = document.getElementById("modalRecipeRating");
const modalIngredients = document.getElementById("modalRecipeIngredients");

recipeCards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Get recipe information from data attributes
        const title = card.dataset.title;
        const image = card.dataset.image;
        const description = card.dataset.description;
        const time = card.dataset.time;
        const rating = card.dataset.rating;
        const ingredients = card.dataset.ingredients;

        // Display information inside modal
        modalTitle.textContent = title;

        modalImage.src = image;
        modalImage.alt = title;

        modalDescription.textContent = description;

        modalTime.textContent = time;

        modalRating.textContent = rating;

        modalIngredients.textContent = ingredients;

    });

});
