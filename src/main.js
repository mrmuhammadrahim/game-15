import './style.css'
import { getNum } from './numbers'


const nums = getNum()
nums[3][3] = 0
console.log(nums)
for(let i = 0; i < 4; i++){
  for(let j = 0; j < 4; j++){
    document.getElementById(`btn${i}_${j}`).textContent = nums[i][j]

  }
}

function fnChange(a, b) {
  console.log(a)
  if((b!= 3) && nums[a][b+1] == 0){
    btnChange(a, b, a, b + 1)
  }
  else if( (b != 0)&& nums[a][b - 1] == 0){
    btnChange(a, b, a, b - 1)
  }
   else if( (a != 3) && nums[a + 1][b] == 0){
    btnChange(a, b, a + 1, b )
  }
   else if( (a != 0)  && nums[a - 1][b] == 0){ 
    btnChange(a, b, a - 1, b)
  }
  
}

window.fnChange = fnChange;

function btnChange(a, b, x, y){

  const chng = nums[a][b]
  nums[a][b] = nums[x][y]
  nums[x][y] = chng

  const firstBtn = document.getElementById(`btn${a}_${b}`);
  const secondBtn = document.getElementById(`btn${x}_${y}`);

  firstBtn.classList.add('btn');
  secondBtn.classList.remove('btn');

  firstBtn.textContent = nums[a][b];
  secondBtn.textContent = nums[x][y];

  
  tekshirish(nums)

}

function tekshirish(nums){

  const tekshir = new Worker('./tekshir.js')

  tekshir.postMessage(nums)

  tekshir.onmessage = evt => {
    if(evt.data){
      alert("Siz yutdingiz")
    }
    else{
      alert("yana urinib ko'ring")
    }
  }
  
  console.log(nums)
}

