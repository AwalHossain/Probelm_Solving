var lengthOfLongestSubstring = function (s) {
    // Store counters for the the start of the window and the longest string's length
    var startOfWindow = 0,
        longestStringLength = 0;

    // Initialise a Map to store the characters of the current string
    var characterMap = new Map();

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Store the current character, and its position in the Map (saves repeatedly looking it up)
        let currentCharacter = s[i];
        let currentCharacterPositionInMap = characterMap.get(currentCharacter);

        console.log(currentCharacterPositionInMap,"j");
        // Check if current character exists in the Map, and was found within the current window
        if (currentCharacterPositionInMap >= startOfWindow) {
            // Move the current window to start after the first instance of the current character
            startOfWindow = currentCharacterPositionInMap + 1;
        }

       
        characterMap.set(currentCharacter, i);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            i - startOfWindow + 1
        );
    }

    return longestStringLength;
};

console.log(lengthOfLongestSubstring("abcdab"));