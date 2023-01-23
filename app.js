const input = document.getElementsByTagName("input")
const convertBtn = document.getElementsByTagName("button")
const playVisible = document.querySelector(".play")
const tableTh = document.createElement("th")
const tableTd = document.createElement("td")
playVisible.appendChild(tableTh)
tableTh.appendChild(tableTd)
let localList = JSON.parse(localStorage.getItem("localliast")) || []

function convertToRoman(num) {
  let valNumberResult = ""
    const arrConv=[{1:'I'},{2:'II'},{3:'III'},{4:'IV'},{5:'V'},{6:'VI'},{7:'VII'},{8:'VIII'},{9:'IX'},{10:'X'},{20:'XX'},{30:'XXX'},{40:'XL'},{50:'L'},{60:'LX'},{70:'LXX'},{80:'LXXX'},{90:'XC'},{100:'C'},{200:'CC'},{300:'CCC'},{400:'CD'},{500:'D'},{600:'DC'},{700:'DCC'},{800:'DCCC'},{900:'CM'},{1000:'M'},{2000:'MM'},{3000:'MMM'},{4000:'MMMM'},{5000:'MMMMM'},{6000:'MMMMMM'},{7000:'MMMMMMM'},{8000:'MMMMMMMM'},{9000:'MMMMMMMMM'}];
    let arr=[num.length];
    arr=num.toString().split("").reverse();
    let i=1;
    for (let j in arr){
      arr.splice(j,1,arr[j]*i);
      i*=10;
    }
   let romansArray=[];
    for (i=0;i<arr.length;i++){
      let val=arrConv.filter(function(obj){
         return obj[arr[i]];
       })[0];
      romansArray.push(val);
    }
    let result=romansArray.filter(function(val){
      return (val!=null);
    });
    return result.map(function(value,key){
      return result[key][arr[key]];
    }).reverse().join("");
  
  }
 
 