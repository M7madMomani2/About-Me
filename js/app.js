'use strict';
let answer="";
let answer2="";
let answer3="";
let answer4="";
let answer5="";
let answer6="";
let answer7="";
let guess1="1996";
let guess2=["GOT" , "BlindSpot", "Supernatural" ];
let name1 ="";
let count=0;
let flage1 = false;
let count7=0;
let count6=0;
name1 =prompt('what\'s your name ?').toUpperCase();
 
answer =prompt('Does Mohammad like  coffee, Y OR N ?').toUpperCase();
    if(answer.toUpperCase() ==="Y"|| answer.toUpperCase() === "YES"){
        console.log("Q1 correct");
        answer="correct";
        count++;
    }
    else{
        console.log("Q1 wrong answer");
        answer="wrong answer";
    }


    answer2 =prompt(' Does Mohammad like chocolate milkshakes?, Y OR N ?').toUpperCase();
    if(answer2.toUpperCase() ==="Y"|| answer2.toUpperCase() === "YES"){
        console.log("Q2 correct");
        answer2="correct";
        count++;
    }
    else{
        console.log("Q2 wrong answer");
        answer2="wrong answer";
    }


    answer3 =prompt('Does Mohammad like travel?, Y OR N ?').toUpperCase();
    if(answer3.toUpperCase() ==="Y"|| answer3.toUpperCase() === "YES"){
        console.log("Q3 correct");
        answer3=" correct ";
        count++;
    }
    else{
        console.log("Q3 wrong answer");
        answer3="wrong answer"
    }

    answer4 =prompt('Can Mohammad make hemself disappear?, Y OR N ?').toUpperCase();
    if(answer4.toUpperCase() ==="Y"|| answer4.toUpperCase() === "YES"){        
        console.log("Q4 wrong answer");
        answer4="wrong answer"

    }
    else{        
        console.log("Q4 correct");
        answer4="correct"
        count++;
    }


    answer5 =prompt('Do Mohammad like games?, Y OR N ?').toUpperCase();
    if(answer5.toUpperCase() ==="Y"|| answer5.toUpperCase() === "YES"){
        console.log("Q5 correct");
        answer5="correct"
        count++;
    }
    else{
        console.log("Q5 wrong answer");
        answer5="wrong answer"
    }

    answer6 =prompt('guess mohammad BD? \nCorrect answer 1996').toUpperCase();
    for (let i = 1 ; i <=3 ; i++ ){
      if (answer6 === guess1){
        count++;
        break;
      }
      else{
        alert(`wrong answer \nNumber of attempts ${i-count6} of 3`);
        answer6 =prompt('guess mohammad BD?').toUpperCase();
    
    }

    }
    answer7 =prompt('guess one of mohammad favorit series : Correct answer :\nGOT\nBlindSpot\nSupernatural').toUpperCase();
    for (let w = 0 ; w <=6 ; w++ ){
        for (let k = 0 ; k< guess2.length; k++){
            if (answer7.toUpperCase() === guess2[k].toUpperCase()){
                count++;
                flage1 = true;
                break;
            }	
        }	

        if (!flage1){
            alert(`wrong answer \nNumber of attempts ${w-count7} `);
            answer7 =prompt('guess one of mohammad favorit film').toUpperCase();
        }
        else{break;}
    }
    alert(`Hello  ${name1} \n\n\nQ1  : ${answer} \nQ2  : ${answer2} \nQ3  : ${answer3} \nQ4  : ${answer4} \nQ5  : ${answer5} \nQ6  : ${answer6} \nQ7  : ${answer7} \n`);
    alert(`correct answer =   ${count} OF 7  \n`);