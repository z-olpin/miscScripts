const dToHex = (n, digits = []) => {
    if (n > 16777215)
        return "#ffffff";
    digits.push(Math.trunc(n % 16));
    if (n / 16 < 1) {
        digits = digits.concat(Array(6 - digits.length).fill(0));
        digits.reverse();
        return "#" + digits.map(d => d > 9 ? String.fromCharCode(d + 87) : d.toString()).join("");
    }
    return dToHex(n / 16, digits);
};
console.log(dToHex(0x0023ef));
