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



function string_bits(string){
    var answer= "";
  for(var i= 0;i<string.length;i+=2){
      answer+=answer+string[i];
  }
    return answer;

}

function caughtSpeeding(speed,birthday){

    if(speed<=60 && birthday==true){
      return 0;
    }
    if(speed<=60 && birthday == false) {
        return 0;
    }
    if(speed>=61 && speed<=65 && birthday==true){
        return 0
    }
    if(speed>=61 && speed<=80 && birthday== false){
      return 1;
    }
    if(speed>=61 && speed<81 && birthday==true){
        return 1;
    }
    if(speed>=81 && birthday== false){
        return 2
    }
    if(speed>=81 && birthday==true){
        return 2
    }
}



function fizz_Buzz(num){
    if(num % 5 == 0 && num % 3 == 0){
        return  " FizzBuzz!";
    }
    if (num % 3 == 0){
        return "Fizz!";
    }
    if(num % 5 ==0){
        return "Buzz!";
    } else{
        return num + "!";

    }


}


function teaParty(candy,tea){
    if(candy<5 || tea<5){
        return 0;
    }
    if(candy >= 2*tea || tea >= 2*candy){
        return 2;
    }
    if(candy >=5 && tea>= 5){
        return 1;
    }
}


function blackjack(num,int){
    num>0;
    int>0;
    if(num>21 && int>21){
        return 0;
    }
    if(num>int && num<=21){
        return num;
    }
    if(int>num && int<=21){
        return int;
    }
    if(int> 21){
        return num;
    }
    if(num> 21){
        return int;
    }
}
// 10. loneSum
// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it
// does not count towards the sum.
//
// loneSum(1, 2, 3) → 6       loneSum(3, 2, 3) → 2        loneSum(3, 3, 3) → 0



function loneSum(a,b,c){
    if(a==b && a==c) {
        return 0;
    }
    if( a==b) {
        return c;
}
    if(a==c ){
        return b;

    }
    if(c==b){
        return a;
    }else{
        return a + b + c;
    }

}


function tester(){
    document.getElementById("output").innerHTML= teaParty(5,6,);
    // document.getElementById("output1").innerHTML= teaParty(20,10);
    // document.getElementById("output2").innerHTML= teaParty(2,2);
    // document.getEelementById("output").innerHTML= (true,true);
}