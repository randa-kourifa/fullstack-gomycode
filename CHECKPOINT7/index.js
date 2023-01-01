let vector1 = [7, 1, 1];
let vector2 = [6, 3, 2];
function dotProduct(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}
console.log(dotProduct(vector1, vector2));
for (let i = 0; i < vector1.length; i++) {
  for (let j = i + 1; j < vector2.length; j++) {
    if (dotProduct(vector1, vector2) === 0) {
      console.log(`${vector1} and ${vector2} are orthogonal `);
    } else {
      console.log(`${vector1} and ${vector2} are not orthogonal `);
    }
  }
}
