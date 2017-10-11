/**
 * Created by h205p3 on 10/5/17.
 */
//write first method
function sleepIn(weekday,vacation) {
    if(weekday==false&&vacation==true) {
        return true;
    }
    if(weekday==true&&vacation==true);
        return true;
    if(weekday==false&&vacation==false); {
        return true;
    }
    if(weekday==true&&vacation==false); {
        return false;
    }
    }



function monkeyTrouble(a_smile,b_smile){
    if(a_smile==true && b_smile ==true) {
        return true;
    }
    if(a_smile==true && b_smile==false) {
        return false;
    }
    if(a_smile==false && b_smile==true) {
        return false;
    }
    if(a_smile==false && b_smile==false) {
        return true;
    }
}

function string_times(string,n){

    var answer = "";

    for(var i= 1 ;i <= n;i++){
      answer+= string;
    }
    return answer;

}


function front_times(string,n){
    var answer="";
    var str = string.substring(0, 3);
    for (var i = 1; i <= n; i++) {
        answer +=str;
    }
    return answer;
}

// 5. String_bits
// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
// string_bits('Hello') → 'Hlo'
// string_bits('Hi') → 'H'
// string_bits('Heeololeo') → 'Hello'

function string_bits(string){
    var answer= "";
  for(var i= 0;i<x;i+2){
      answer+=string[0,2,4,6];
  }
    return answer;

}

function tester(){
    document.getElementById("output").innerHTML= front_times("love",5);
    document.getElementById("output1").innerHTML= front_times("camera",3);
    document.getElementById("output2").innerHTML= front_times("purse",4);
    // document.getEelementById("output").innerHTML= (true,true);
}