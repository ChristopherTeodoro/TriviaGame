$('#start').on('click',function() {
    $('#start').remove();
    for (var i=0; i<questions.length; i++){
        $('#sub-wrapper').append('<h2>'+questions[i].question+'</h2>');
        for (var x=0; x<questions[i].answers.length; x++){
        $("#sub-wrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[x]+"'>"+questions[i].answers[x])
        }
    } 
})

var questions = [{
    question:'What is my favorit movie?',
    answers:['Avatar', 'Arachnaphobia', 'Congo','Falling Down', 'Angel-A'],
    correctAnswer:'Falling Down'
}, {
    question:'What is my favorite food?',
    answers:['Italian','Greek','Indian','Chinese','Korean'],
    correctAnswer:'Italian'

}, {
    question:'What is my favorite sport?',
    answers:['Baseball','Football','Hockey','Soccer',"Basketball"],
    correctAnswer:'Football'
}, {
    question:'What is my favorite band?',
    answers:['Fugazi','The Doors','Nirvana',"The Roots","The Smiths"],
    correctAnswer:'The Roots'
}, {
    question:'What is my favorite color?',
    answers:['red','blue','orange','green','purple'],
    correctAnswer:'blue'
}, {
    question:'Who is my favorite artist?',
    answers:['Basquiat','Salvador Dali',"Van Gogh",'Frida Khalo','Rembrandt'],
    correctAnswer:'Basquiat'
}, {
    question:'Who is my favorite actor?',
    answers:['Will Smith','Robin Williams','Brad Pitt','Clint Eastwood','Tom Cruise'],
    correctAnswer:'Brad Pitt'
}, {
    question:'Who is my favorite actress?',
    answers:['Nicole Kidman','Anna Faris','Angelina Jolie','Reese Witherspoon','Megan Fox'],
    correctAnswer:'Reese Witherspoon'
}]