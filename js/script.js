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
    'answer1' : ['Кафедральный собор Святого Духа', `Самая старая постройка на площади — это действительно Кафедральный собор Святого Духа.<br>
        (Katedrála sv. Ducha)`], 
    'answer2' : ['9', 'Количество ступенек к главному входу и вправду 9.'],
    'answer3' : ['72', 'Высота башни указаная на табличке точно 72 метра.'],
    'answer4' : ['20', 'Количество окон на фасаде — 20.'],
    'answer5' : ['лев', 'Животное на вершине фонтана самый настоящий лев!<br> И ты выигрываешь <strong>главный приз</strong>!'],
    //Призы:
    'prize1' : 'И ты получаешь Призрачный корабль!<br> Едем дальше?',
    'prize2' : 'У тебя теперь есть вполне реальные доски для строительства яхты!<br> Продолжим?',
    'prize3' : 'Вау! Ты смог построить моторную лодку!<br> Достойный апгрейд? Нет? Тогда:',
    'prize4' : 'Наконец-то ты заработал потрясающую яхту!<br> Но и это ещё не всё, жми!',
    'prize5' : 'Аренду <strong>профессиональной crew</strong> на неделю!<br> Еда и напитки входят в стоимость!',
}

const inputBox = document.getElementById('input-box');
const todo = document.getElementById('todo-app');
const rowHide = document.getElementsByClassName('row');
const winHide = document.getElementsByClassName('win');
const next = document.getElementById('next');
const intro = document.getElementById('intro');
const pic = document.getElementById('picture');
const desc = document.getElementById('description');
let questionNumber = 1;

function saveData(){
    todo.setItem("data", todo.innerHTML);
}

function show(){
    todo.innerHTML = localStorage.getItem("data");
    console.log(todo.innerHTML)
}

function checkAnswer(){
    if(inputBox.value === ''){
        alert("Кажется ты ничего не ответил. Попробуй ещё раз!")
    } else if(inputBox.value.length >= 200){
        alert("Ответ не такой уж и большой!")
    } else{
        if(questionNumber < 6){
            let userAnsw = inputBox.value.toLowerCase();
            if(userAnsw.trim() == quizData[`answer${questionNumber}`][0].toLowerCase()){
                inputBox.value = '';
                questionNumber += 1;
                congrats()
            } else{
                alert("Неверно, попробуй ещё раз!") 
            }   
        }
              
    }
}

function congrats(){
    answer = document.getElementById('answer');
    answer.innerHTML = quizData[`answer${questionNumber - 1}`][1]
    pic.src = `img/pic${questionNumber - 1}.webp`
    desc.innerHTML = quizData[`prize${questionNumber - 1}`]

    if (questionNumber < 6){
        for (let i = 0; i < rowHide.length; i++){
            winHide[i].classList.toggle("invisible");
            rowHide[i].classList.toggle("invisible");
            console.log(questionNumber)
        }
    
    } else {
        for (let i = 0; i < rowHide.length; i++){
            rowHide[i].classList.toggle("invisible");
            winHide[i].classList.toggle("invisible");
        }
        next.remove();
    }
    
 }

function newQuestion(){
    question = document.getElementById('question');
    start = document.getElementById('start');
    newQues = quizData[`question${questionNumber}`];
    newStart = quizData[`start${questionNumber}`];
    question.innerHTML = newQues;
    start.innerHTML = newStart;
    next.innerHTML = 'Следующий вопрос';
    intro.innerHTML = 'Поздравляем!';
    
    for (let i = 0; i < rowHide.length; i++){
        winHide[i].classList.toggle("invisible");
        rowHide[i].classList.toggle("invisible");
    }
}
    