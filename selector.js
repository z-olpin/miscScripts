const selector = (bids, min) => {
  let _bids = [...bids]
  let winningBid = 0
  _bids.sort()
  console.log(
    [...Array(_bids.length).keys()]
      .reduce((acc, curr) => (_bids.includes(curr + 1))
        ? [...acc, curr + 1]
        : [...acc, curr +1], [])
  )
  let avg = Math.round(_bids.reduce((a,c) => a + c) / _bids.length)
  if (_bids.find(e => e > min)) {
    winningBid = (avg > min)
                      ? _bids.find(e => e > avg)
                      : _bids.find(e => e > min)
  } else {
    winningBid = Math.max(..._bids)
  }
  if (winningBid < min){
    console.log( `Min: ${min}, `
               , `Avg: ${avg}, `
               , `Winner: ${winningBid} pays ${winningBid}, `
    )
  } else {
    console.log( `Min: ${min}, `
               , `Avg: ${avg}, `
               , `Winner: ${winningBid} pays ${Math.max(min, avg)}, `
               )
  }
}

// let [winningBid, avg, min] = selector([50,50,50,60,1000], 100)
// let [winningBid, avg, min] = selector([30,30,40,40,40,50,50,50,110], 100)
// let [winningBid, avg, min] = selector([30,30,40,40,40,50,50,50,700], 100)
// let [winningBid, avg, min] = selector([30,30,40,40,40,50,50,50,120,120,130,130,180,180,180,190,190,190,240,240,240], 100)
// let [winningBid, avg, min] = selector([120,120,120,130,130,130], 100)
// let [winningBid, avg, min] = selector([120,120,120,130,130,130,160,160,160,170,170,170,180], 100)
// let [winningBid, avg, min] = selector([110,110,110,10], 100)
// let [winningBid, avg, min] = selector([20,20,20,40,60,130], 100)

for (let _e of [...Array(10).keys()]) {
  selector(
    [...Array(Math.round(Math.random() * 10) + 1).keys()]
        .map(_e => Math.round(Math.random() * 500) + 1)
    , Math.round(Math.random() * 500) + 1)
}