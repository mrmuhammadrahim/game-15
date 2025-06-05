

getNum()
export function getNum (){
    const arrNum = []
    const arr = []
    for(let i = 0; i<4 ; i++ ){
        arr[i] = new Array()
    }

    let correct
    let k = 0
    for( let i = 0; i < 15; i++ ){

        do{
            correct = true

            k = Math.floor(Math.random()*15) + 1
            for(let j = 0; j < i; j++){
                if(arrNum[j] == k){
                    correct = false
                }
            }

        } while(!correct)

        arrNum[i] = k
    }


    let num = 0
    for(let i = 0; i< 4; i++){
        for(let j = 0; j < 4; j++){
            arr[i][j] = arrNum[num]
            num++
        }
    }


    return arr
}
