export default function removeEmojis (str: string) {
    return str.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()
}