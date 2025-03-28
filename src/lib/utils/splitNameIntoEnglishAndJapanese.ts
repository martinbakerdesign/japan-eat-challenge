export default function splitNameIntoEnglishAndJapanese(name: string) {
    const englishName = name.includes('(')
        ? name.split('(')[0]
        : name;
    const japaneseName = name.includes('(')
        ? name.split('(')[1].replace(')', '')
        : null;

    return [
        englishName,
        japaneseName
    ]
}