'use strict';
let answer="";
let answer2="";
let answer3="";
let answer4="";
let answer5="";
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

alert(`Hello  ${name1} \n\n\nQ1  : ${answer} \nQ2  : ${answer2} \nQ3  : ${answer3} \nQ4  : ${answer4} \nQ5  : ${answer5} \n`);

