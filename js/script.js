const quizData = {
    //Стартовые точки:
    'start1' : 'Великая площадь (Velké náměstí)',
    'start2' : 'Кафедральный собор Святого Духа (Katedrála sv. Ducha)',
    'start3' : 'Белая Башня (Bílá věž)',
    'start4' : 'Епископский дворец (Biskupský palác)',
    'start5' : 'Парк Янских садов (Jiráskovy sady)',
    //Загадки:
    'question1' : `На этой площади стоит древнейший храм,<br>
    Его найди и имя дай нам.`,
    'question2' : `Этот храм высок и славен,<br>
    Вход в него и вид красив.<br>
    Считай ступеньки к входу прямо,<br>
    И их число преподнеси.`,
    'question3' : `Башня в крае городском,<br>
    С вершины город виден.<br>
    Ты высоту узнай тайком,<br>
    Ответ в табличке скрытен.`,
    'question4' : `Величественный дворец стоит,<br>
    С окном на окне фасад красив.<br>
    Считай все окна ты на нём,<br>
    И сколько их, скажи потом.`,
    'question5' : `Фонтан красивый в парке есть,<br>
    С животным на вершине.<br>
    Его достоинств нам не счесть,<br>
    Что там за зверь, скажи нам.`,
    //Ответы: 
    'answer1' : ['Кафедральный собор Святого Духа', `Самая старая постройка на площади — это Кафедральный собор Святого Духа.<br>
        (Katedrála sv. Ducha)`], 
    'answer2' : ['9', 'Количество ступенек к главному входу — 9.'],
    'answer3' : ['72', 'Высота башни указана на табличке — 72 метра.'],
    'answer4' : ['20', 'Количество окон на фасаде — 20.'],
    'answer5' : ['лев', 'Животное на вершине фонтана — лев.']
}

const inputBox = document.getElementById('input-box');
const todo = document.getElementById('todo-app');
const rowHide = document.getElementsByClassName('row')
const winHide = document.getElementsByClassName('win')
const next = document.getElementById('next')
let questionNumber = 1;

function checkAnswer(){
    if(inputBox.value === ''){
        alert("Кажется ты ничего не ответил. Попробуй ещё раз!")
    } else if(inputBox.value.length >= 200){
        alert("Ответ не такой уж и большой!")
    } else{
        if(questionNumber < 6){
            if(inputBox.value.toLowerCase() == quizData[`answer${questionNumber}`][0].toLowerCase()){
                inputBox.value = '';
                questionNumber += 1;
                congrats()
            } else{
                alert("Неверно, попробуй ещё раз!") 
            }   
        } else{
            console.log('Win')
        }
                 
    }
}

function congrats(){
    answer = document.getElementById('answer');
    answer.innerHTML = quizData[`answer${questionNumber - 1}`][1]

    for (let i = 0; i < rowHide.length; i++){
        winHide[i].classList.toggle("invisible");
        rowHide[i].classList.toggle("invisible");
        next.classList.toggle("invisible");
    }
 }
function newQuestion(){
    question = document.getElementById('question');
    start = document.getElementById('start');
    newQues = quizData[`question${questionNumber}`];
    newStart = quizData[`start${questionNumber}`];
    /* for (let i = 0; i < newQues.length; i++) {
        if (newQues[i] == '.' || newQues[i] == ',') {
            newQues[i].concat(' ', '<br>')
        }
    }
    for (let i = 0; i < newStart.length; i++) {
        if (newStart[i] == '.') {
            newStart[i].concat(' ', '<br>')
        }
    } */
    question.innerHTML = newQues;
    start.innerHTML = newStart;
    
    for (let i = 0; i < rowHide.length; i++){
        winHide[i].classList.toggle("invisible");
        rowHide[i].classList.toggle("invisible");
        next.classList.toggle("invisible")
    }
}
    