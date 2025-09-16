// переменные для max и min скорости утки 
let minSpeed = 6000; 
let maxSpeed = 10000;

// функция для рандомного числа, значения: 530px - max; 475px - min
function randomNum(min, max){
    return Math.floor(Math.random() * ( max - min ) + min);
}

// массивы здоровья уток 
let duck_healthArr = {}
let duck_healthBarArr = [];
duckID = 0;
// ============
// переменная для игровой области 
let gameArea = document.querySelector(".gameArea")


// изменение уровня сложности 

let BTN__lvlComplexityEazy = document.querySelector("#BTN__lvlComplexity--eazy")
let BTN__lvlComplexityMedium = document.querySelector("#BTN__lvlComplexity--medium")
let BTN__lvlComplexityHard = document.querySelector("#BTN__lvlComplexity--hard")

BTN__lvlComplexityEazy.onclick = () =>{

    minSpeed = 8000; 
    maxSpeed = 12000;

    arrDuck.forEach( (item) => {
        item.style.animationDuration = `${randomNum(minSpeed, maxSpeed)}ms`;
    })
    return minSpeed, maxSpeed;
}

BTN__lvlComplexityMedium.onclick = () =>{
    minSpeed = 6000; 
    maxSpeed = 10000;

    arrDuck.forEach( (item) => {
        item.style.animationDuration = `${randomNum(minSpeed, maxSpeed)}ms`;
    })
    return minSpeed, maxSpeed;
}

BTN__lvlComplexityHard.onclick = () =>{
    minSpeed = 2000; 
    maxSpeed = 5000;

    arrDuck.forEach( (item) => {
        item.style.animationDuration = `${randomNum(minSpeed, maxSpeed)}ms`;
    })
    return minSpeed, maxSpeed;
}


// все утки (массив)
let arrDuck = [];


function createDuck(){

    if ( document.querySelectorAll(".duck").length < 8 ){ 
        
        //  создание новой утки 
        let duck = document.createElement('div');
        duck.classList.add("duck");
        
        let duck_HP = document.createElement('div');
        duck_HP.classList.add("duck_healthBar");
        
        duck.appendChild(duck_HP);
        //  !создание новой утки 

        // добавление утки в массив и добавление ей здоровья
        arrDuck.push(duck);
        duck_healthBarArr.push(duck_HP);

        duck_healthArr[`duck${duckID}`] = 100; // создание новой полоски здоровья + увлечение duckID
        // !добавление утки в массив и добавление ей здоровья
        


        // настрйоки утки 
        arrDuck[duckID].style.top = `${randomNum(475, 530)}px`;// функция для рандомного отступа сверху для утки, значения: 530px - max; 475px - min
        arrDuck[duckID].style.animationDuration = `${randomNum(minSpeed, maxSpeed)}ms`; // функция для рандомной скорости утки 
        // !настрйоки утки 

        ++duckID;

        // добавление новой утки в игровую область    
        gameArea.appendChild(duck);
    }
    // обработка выстрела 
    arrDuck.forEach( (item, index) => {

        item.onclick = () => {
            
            duck_healthArr[`duck${index}`] -= damage;
            
            duck_healthBarArr[index].style.width = `${duck_healthArr[`duck${index}`]}px`

            if (duck_healthArr[`duck${index}`] <= 0) {
                moneyValue += 10;
                money.innerHTML = moneyValue;

                gameArea.removeChild(item);
            }
        }
    })
}

// создание утки каждые 0,5 секунды
setInterval(createDuck, 500);





// полоска здоровья утки ( массив )
let duck_healthBar = document.querySelectorAll(".duck_healthBar")

// урон оружия
let damage = 35; 



// деньги
let money = document.querySelector(".money__value"); 
let moneyValue = 0;

money.innerHTML = moneyValue;









// переменные для нажатия на кнопку настроек
let settings = document.querySelector(".settings");
let menu__settingsBTN = document.querySelector(".menu__settingsBTN");
let isSettings = false;

// обоработка нажатия на кнопку настроек
menu__settingsBTN.onclick = () => {
    if ( isSettings ){
        settings.style.display = "none";
        isSettings = false;
        menu__settingsBTN.style.transform = "rotate(90deg)";
        // menu__settingsBTN.style.transform = "scale(1.1)";
    } else {
        settings.style.display = "block";
        isSettings = true;
        menu__settingsBTN.style.transform = "rotate(-90deg)";
        // menu__settingsBTN.style.transform = "scale(1.1)";
    }
}


// скрытие блока настроек путём нажатия вне его границ 
gameArea.onclick = () => { 
    settings.style.display = "none";
    isSettings = false;
    menu__settingsBTN.style.transform = "rotate(90deg)";  
}

// настройка ползунка музыки

let volume__circle = document.querySelector(".volume__circle");

volume__circle.onmousedown = (event) => {

    function circleMove(event){
        volume__circle.style.left = `${event.pageY}px`
    } 
    
    circleMove(event);
}


volume__circle.ondragstart = function() {
    return false;
  };




