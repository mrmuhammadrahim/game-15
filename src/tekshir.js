const data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 15, 14, 0]
]

let correc = false
let count = 0
self.onmessage = nums => {
    for(let i = 0; i < 4; i++){
        for( let j = 0; j < 4; j++ ){
            if(nums.data[i][j] == data[i][j]){
                count++
            }
        }  
    }

    if( count == 16 ){
        correc = true
    }

    self.postMessage(correc)
}