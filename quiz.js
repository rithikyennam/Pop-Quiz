//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()

compliments[0] = "Outstanding performance!";
compliments[1] = "Right on point!";
compliments[2] = "Nailed it!";
compliments[3] = "Spot on! Great Job!";
compliments[4] = "Keep up the good work!";
compliments[5] = "That's the spirit!";
compliments[6] = "You're on fire!";


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which vitamin is essential for proper bone health and can be absorbed from sunlight?"
choice1[1]="Vitamin A"
choice1[2]="Vitamin C"
choice1[3]="Vitamin D"
choice1[4]="Vitamin E"

question[2]="Which macronutrient is primarily responsible for providing energy to our body?"
choice2[1]="Proteins"
choice2[2]="Carbohydrates"
choice2[3]="Fats"
choice2[4]="Vitamins"

question[3]="Approximately how many calories are there in one gram of fat?"
choice3[1]="4"
choice3[2]="7"
choice3[3]="9"
choice3[4]="12"

question[4]="Which of the following foods is a rich source of dietary fiber?"
choice4[1]="White rice"
choice4[2]="Apples"
choice4[3]="Cheese"
choice4[4]="Chicken"

question[5]="What percentage of the human body is made up of water?"
choice5[1]="45-55%"
choice5[2]="50-60%"
choice5[3]="60-70%"
choice5[4]="75-85%"

question[6]="How many servings of fruits and vegetables are generally recommended per day?"
choice6[1]="2-3"
choice6[2]="3-4"
choice6[3]="4-5"
choice6[4]="5-6"

question[7]="Which mineral is most abundant in our bones?"
choice7[1]="Iron"
choice7[2]="Sodium"
choice7[3]="Calcium"
choice7[4]="Potassium"

question[8]="Which type of cholesterol is considered the 'good' cholesterol?"
choice8[1]="LDL"
choice8[2]="HDL"
choice8[3]="VLDL"
choice8[4]="Triglycerides"

question[9]="Which diet primarily consists of plant-based foods and eliminates animal products?"
choice9[1]="Paleo"
choice9[2]="Ketogenic"
choice9[3]="Vegan"
choice9[4]="Mediterranean"

question[10]="Which of the following is a source of omega-3 fatty acids?"
choice10[1]="Coconut oil"
choice10[2]="Canola oil"
choice10[3]="Olive oil"
choice10[4]="Salmon"


solution[1]="c"
solution[2]="b"
solution[3]="c"
solution[4]="b"
solution[5]="c"
solution[6]="c"
solution[7]="c"
solution[8]="b"
solution[9]="c"
solution[10]="d"
