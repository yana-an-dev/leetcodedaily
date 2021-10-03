/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {

    let regex = new RegExp(p)

    if (s.match(regex) == null) {
        return false
    }

    let result = s.match(regex).toString()
    return result === s




};