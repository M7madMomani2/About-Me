'use strict';
let answer="";
let answer2="";
let answer3="";
let answer4="";
let answer5="";
let answer6="";
let answer7="";
let guess1="96";
let guess2[3]={GOT , BlindSpot, Supernatural };
let name1 ="";
name1 =prompt('what\'s your name ?').toUpperCase();
 
answer =prompt('Does Mohammad like  coffee, Y OR N ?').toUpperCase();
    if(answer =="Y"){
        console.log("Q1 correct");
        answer="correct"
    }
    else{
        console.log("Q1 wrong answer");
        answer="wrong answer"

    }


    answer2 =prompt(' Does Mohammad like chocolate milkshakes?, Y OR N ?').toUpperCase();
    if(answer2 =="Y"){
        console.log("Q2 correct");
        answer2="correct";
    }
    else{
        console.log("Q2 wrong answer");
        answer2="wrong answer";
    }


    answer3 =prompt('Does Mohammad like travel?, Y OR N ?').toUpperCase();
    if(answer3 =="Y"){
        console.log("Q3 correct");
        answer3=" correct ";

    }
    else{
        console.log("Q3 wrong answer");
        answer3="wrong answer"
    }

    answer4 =prompt('Can Mohammad make hemself disappear?, Y OR N ?').toUpperCase();
    if(answer4 =="Y"){        
        console.log("Q4 wrong answer");
        answer4="wrong answer"

    }
    else{        
        console.log("Q4 correct");
        answer4="correct"
    }


    answer5 =prompt('Do Mohammad like games?, Y OR N ?').toUpperCase();
    if(answer5 =="Y"){
        console.log("Q5 correct");
        answer5="correct"

    }
    else{
        console.log("Q5 wrong answer");
        answer5="wrong answer"
    }

let count6=0;
answer6 =prompt('guess mohammad BD?, Y OR N ?').toUpperCase();
for (let i = 0 ; i <3 ; i++ ){
  if (answer6 === guess1){
   break; 
 
  }
	}

let count7=0;
answer7 =prompt('guess one of mohammad favorit film BD?, Y OR N ?').toUpperCase();
for (let i = 0 ; i <6 ; i++ ){
 for (let x = 0 ; x< guess2.length(); x++){
  if (answer7 === guess2[x]){
   break; 
  }	
  else {
  }
	}	
}

alert(`wrong answer \nNumber of attempts ${} `);


alert(`Hello  ${name1} \n\n\nQ1  : ${answer} \nQ2  : ${answer2} \nQ3  : ${answer3} \nQ4  : ${answer4} \nQ5  : ${answer5} \n`);

