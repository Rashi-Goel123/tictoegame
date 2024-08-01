
let arr = [
   [-1, -1, -1],
   [-1, -1, -1],
   [-1, -1, -1]
];
let count = 0;
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const r6 = document.getElementById('r6');
const r7 = document.getElementById('r7');
const r8 = document.getElementById('r8');
const r9 = document.getElementById('r9');

function handleClick(cell, row, col) {
   if (arr[row][col] == -1) {
       if (count % 2 == 0) {
           arr[row][col] = 1;
           cell.innerHTML = "X";
       } else {
           arr[row][col] = 0;
           cell.innerHTML = "O";
       }
       count++;
       condition(count);
   }
}

r1.addEventListener("click", function() { handleClick(r1, 0, 0); });
r2.addEventListener("click", function() { handleClick(r2, 0, 1); });
r3.addEventListener("click", function() { handleClick(r3, 0, 2); });
r4.addEventListener("click", function() { handleClick(r4, 1, 0); });
r5.addEventListener("click", function() { handleClick(r5, 1, 1); });
r6.addEventListener("click", function() { handleClick(r6, 1, 2); });
r7.addEventListener("click", function() { handleClick(r7, 2, 0); });
r8.addEventListener("click", function() { handleClick(r8, 2, 1); });
r9.addEventListener("click", function() { handleClick(r9, 2, 2); });

function condition(steps){
   if(
        arr[0][0]==arr[0][1]&&arr[0][1]==arr[0][2]&&arr[0][0]!=-1 ||
        arr[1][0]==arr[1][1]&&arr[1][1]==arr[1][2]&&arr[1][0]!=-1 ||
        arr[2][0]==arr[2][1]&&arr[2][1]==arr[2][2]&&arr[2][0]!=-1 ||
        arr[0][0]==arr[1][0]&&arr[1][0]==arr[2][0]&&arr[0][0]!=-1 ||
        arr[0][1]==arr[1][1]&&arr[1][1]==arr[2][1]&&arr[0][1]!=-1 ||
        arr[0][2]==arr[1][2]&&arr[1][2]==arr[2][2]&&arr[0][2]!=-1 ||
        arr[0][0]==arr[1][1]&&arr[1][1]==arr[2][2]&&arr[0][0]!=-1 ||
        arr[0][2]==arr[1][1]&&arr[1][1]==arr[2][0]&&arr[0][2]!=-1        
   ){

      if(steps%2==0){
         alert("O is winner");
         location.reload();
      }
      else{
         alert("X is winner");
         location.reload();
      }
   }
   else if(steps==9){
      alert(" GAME IS DRAW");
      location.reload();
   }
}

 