function chessboard() {
    // create an array of numbers
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  
    // create an array of letters
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  
    // create an array
    const chessboard = [];
    // create a nested loop
    // external loop for letters
    for (let i = 0; i < letters.length; i++) {
      // create another array to contain the squares coordinates
      const row = [];
      // inner loop for numbers
      for (let j = 0; j < numbers.length; j++) {
        // push "letter - number" to the row
        row.push(`${letters[i]} - ${numbers[j]}`);
      }
      // push our row in the chessboard
      chessboard.push(row);
    }
  
    return chessboard;
  
    // optimization using map()
    // return letters.map(letter => numbers.map(number => `${letter} - ${number}`))
  }
  
  module.exports = chessboard;
  