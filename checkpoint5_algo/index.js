//The length of the sentence (the number of characters).
let array = "hello beautiful world.";
for (let i = 0; i < array.length; i++) {
  let arr = array.length;
  console.log(arr);
}
//The number of words in the sentence (assuming that the words are separated by a single space).
let array2="this task is really simple"
function countWords(str) {
  let count = 0;
  for (let i = 0; i < array2.length; i++) {
      if (array2[i] === ' ') {
          count++;
      }
  }
  return count + 1;
  
}console.log(countWords(array2))
//The number of vowels in the sentence.
let array1="its tuesday"
function countVowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < array1.length; i++) {
      if (vowels.includes(array1[i])) {
          count=count+1;
      }

  }
  return count;
  
}console.log(countVowels(array1));