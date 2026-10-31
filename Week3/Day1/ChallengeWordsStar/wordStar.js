// 1. Prompt the user for several words (separated by commas)
const userInput = prompt("Enter several words separated by commas:");

if (userInput) {
  // 2. Put the words into an array and trim extra whitespace around each word
  const words = userInput.split(",").map(word => word.trim());

  // Find the length of the longest word
  const maxLength = Math.max(...words.map(word => word.length));

  // The top and bottom border length:
  // longest word length + 2 spaces padding + 2 boundary asterisks
  const border = "*".repeat(maxLength + 4);

  // 3. Print the top border
  console.log(border);

  // Print each word framed with asterisks and right-padded with spaces
  for (const word of words) {
    console.log(`* ${word.padEnd(maxLength, " ")} *`);
  }

  // Print the bottom border
  console.log(border);
}