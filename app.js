const quiz = [
    {
        question: 'Q1:ゲーム市場一番売れたものはどれ？',
        answer: [
        'スーパーファミコン',
        'プレイステーション',
        'ニンテンドースイッチ',
        'ニンテンドーＤＳ'
        ],
        correctAnswer:'ニンテンドーＤＳ'
    },{
        question: 'Q2:ポケモンの中で一番種類の多いタイプはどれ？',
        answer: [
        'くさ',
        'みず',
        'ほのお',
        'でんき',      
        ],
        correctAnswer:'みず'
    },{
        question: 'Q3:慢性腎不全がある人の食事について正しいものはどれ？',
        answer: [
        'みそ汁を毎食とる',
        '生の果物を多く接種する',
        '水分を接種してはならない',
        '野菜はできるだけ控える',
        
        ],
        correctAnswer:'野菜はできるだけ控える'
    },{
        question: '世界で最も多く主食とされている穀物は？',
        answer: [
            '小麦',
            'とうもろこし',
            '米',
            '大豆',        
        ],
        correctAnswer:'とうもろこし'
    }

]
const quizLength = quiz.length;
let quizIndex =0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文、選択肢を定義
const setupQuize =  () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}

setupQuize();


// ボタンをクリックしたときの正誤操作

const clickHandler = (e) => {
    if(quiz[quizIndex].correctAnswer === e.target.textContent){
        window.alert('正解(´・ω・)');
        score++;
    } else {
        window.alert(
        `不正解( *´艸｀)\n※正解は${quiz[quizIndex].correctAnswer}です`);
    }
    
    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuize();
    } else {
        // 問題数がなければこちらを実行
        window.alert('終了！！あなたの正解数は'+ score + '/' + quizLength + 'です！')
    }
};

let handlerIndex =0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler (e);
    });
    handlerIndex++;
}
