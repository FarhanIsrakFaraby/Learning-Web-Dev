function finalScore(omr) {
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    if (typeof omr.right !== 'number' || typeof omr.wrong !== 'number' || typeof omr.skip !== 'number') {
        return "Invalid";
    }

    if (omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid";
    }

    let score = omr.right - (omr.wrong * 0.5);
    return Math.round(score);
}