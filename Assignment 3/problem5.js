function analyzeText(str) {
    if (typeof str !== 'string' || str.trim().length === 0) {
        return "Invalid";
    }

    let words = str.split(' ');
    let maxWord = "";

    for (let word of words) {
        if (word.length > maxWord.length) {
            maxWord = word;
        }
    }

    let totalLength = str.split(' ').join('').length;

    return {
        longwords: maxWord,
        token: totalLength
    };
}