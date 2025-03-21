const regex = /[a-zA-Z0-9_-]{11}/;

export default function validateShortId (id: ShortID) {
    if (id == null) return false;
    return regex.test(id);
}