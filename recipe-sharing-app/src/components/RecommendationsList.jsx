import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Refresh Recommendations</button>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
