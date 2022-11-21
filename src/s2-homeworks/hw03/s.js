function firstToLast(str, c) {
    let a = str.indexOf(c)
    let b = str.lastIndexOf(c)
    let gap = b - a
    if (!a && !b) {
        return -1
    } else {
        return gap
    }
}