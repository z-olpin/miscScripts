// Chunk an array.
// chunk([4, 1, 2, 3, 1], 2) 🍴 [[4, 1], [2, 3], [1]]

const chunk = (array, chunkSize) => {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    if (i % chunkSize === 0) arr.push([array[i]])
    else arr[arr.length - 1].push(array[i])
  }
  return arr
}

