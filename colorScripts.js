//  9199 -> #0023ef
const decimalToHexCode = (n, digits = []) => {
	if (n > 16777215)
			return "#ffffff";
	digits.push(Math.trunc(n % 16));
	if (n / 16 < 1) {
			digits = digits.concat(Array(6 - digits.length).fill(0));
			digits.reverse();
			return "#" + digits.map(d => d > 9
																		 ? String.fromCharCode(d + 87)
																		 : d.toString()
			).join("");
	}
	return decimalToHexCode(n / 16, digits);
};

// [255,40,10] -> '#ff28a0'
const rgbToHex = rgbArr => {
	return "#" + rgbArr.map(n => n.toString(16))
                     .map(c => c.padEnd(2, '0'))
                     .join('')
}

// "30cce7" -> [48, 204, 231]
const hexToRgb = hexStr => {
	return [
		  hexStr.substr(0, 2)
		, hexStr.substr(2, 2)
		, hexStr.substr(4, 2)
	].map(s => parseInt(s, 16))
}

// "3e9900" -> "c166ff"
const complement = hexStr => {
	return [
		  hexStr.substr(0, 2)
		, hexStr.substr(2, 2)
		, hexStr.substr(4,2)
	].map(s => parseInt(s, 16))
	 .map(n => 255 - n)
	 .map(n => n.toString(16))
	 .map(c => c.padEnd(2, '0'))
	.join('')
}
