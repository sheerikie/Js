var fruits = [ "apple", "orange", "mango" ];











let values = [60, 50, 70, 30];
let weights = [5, 3, 4, 2];
let maxWeightConstraint = 8;




function knap(values, weights, maxWeightConstraint) {
  const knapsack = (values, weights, maxWeightConstraint) => {
    return knapsackHelper(values, weights, maxWeightConstraint, values.length);
  };

  const knapsackHelper = (values, weights, maxWeightConstraint, totalItems) => {
    if (totalItems == 0 || maxWeightConstraint === 0) {
      return 0;
    }

    const currentItemIndex = totalItems - 1;
    if (weights[currentItemIndex] > maxWeightConstraint) {
      return knapsackHelper(
        values,
        weights,
        maxWeightConstraint,
        totalItems - 1
      );
    }

    const withItem =
      values[currentItemIndex] +
      knapsackHelper(
        values,
        weights,
        maxWeightConstraint - weights[currentItemIndex],
        totalItems - 1
      );
    const withoutItem = knapsackHelper(
      values,
      weights,
      maxWeightConstraint,
      totalItems - 1
    );

    return Math.max(withItem, withoutItem);
  };
}
