module.exports = function reverse (n) {
    let x = String(Math.abs(n))
    let res = x.split("").reverse().join("")
  return Number(res)
}