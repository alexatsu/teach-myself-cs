function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");

        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(str);
        } else {
            anagramMap.set(sortedStr, [str]);
        }
    }

    return Array.from(anagramMap.values());
};