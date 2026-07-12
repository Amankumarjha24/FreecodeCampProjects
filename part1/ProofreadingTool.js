
function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

function findPalindromeBreaks(words) {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!phrases[phrase]) {
      phrases[phrase] = [];
    }

    phrases[phrase].push(i);
  }

  for (const phrase in phrases) {
    if (phrases[phrase].length > 1) {
      result.push(...phrases[phrase]);
    }
  }

  return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const results = [];

  for (const words of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }

  return results;
}
