import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Steps are required.";

    const ingredientsList = ingredients
      .split("\n")
      .filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    });

    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="e.g., Veggie Stir Fry"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="e.g.,\nCarrots\nBroccoli\nSoy Sauce"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={4}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="e.g.,\nChop vegetables\nStir-fry in pan\nAdd sauce and serve"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
