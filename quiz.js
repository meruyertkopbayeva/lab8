$(document).ready(function(){
    $('.button-3').remove()
    correct = [
        "Mercury",
        "Dolphin",
        "118",
        "Cheetah",
        "Neil Armstrong",
        "Asia",
        "Mount Kilimanjaro",
        "Canberra",
        "Leonardo da Vinci",
        "Skin"
    ];
    questions = [
        "What is the smallest planet in our solar system?",
        "Which animal has the largest brain in relation to its body size?",
        "How many elements are on the periodic table?",
        "What is the fastest land animal?",
        "Who was the first person to walk on the moon?",
        "What is the largest continent by land area?",
        "What is the highest mountain in Africa?",
        "What is the capital city of Australia?",
        "Who painted the famous work of art, 'The Mona Lisa'?",
        "What is the largest organ in the human body?"
    ];
    choice_options = [
        ["Jupiter", "Venus", "Mercury", "Saturn"],
        ["Elephant", "Dolphin", "Blue whale", "Chimpanzee"],
        ["92", "118", "106", "63"],
        ["Cheetah", "Lion", "Gazelle", "Hyena"],
        ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        ["South America", "Europe", "Asia", "Australia"],
        ["Mount Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Stanley"],
        ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        ["Liver", "Heart", "Skin", "Lungs"]
    ];
    quizBox = $("#quiz-box");
    for (let i = 0; i < 10; i++) {
        question = $('<div>',{
            'id' : 'q_id' + i.toString(),
            'name': 'q_name_' + i.toString(),
            'class': 'question'
        })
        question.append("<p>" + (i + 1).toString() + " " + questions[i] + "</p>")
        for (let j = 0; j < choice_options[i].length; j++) {
            label = $('<label>')
            label.append($('<input>',{
                'type': 'radio',
                'name': 'q_opt_name_' + (i + 1).toString(),
                'value': choice_options[i][j],
                'id': 'q_opt_id_' + (i + 1).toString()
            }))
            label.append(choice_options[i][j])
            question.append(label)
        }
        quizBox.append(question)
    }
    quizBox.append('<button class="button-3">Check Answer</button>')
    reset = false;
    $('.button-3').click(function (event) {
        countCorrect = 0;
        asnweredAll = true
        for (let i = 0; i < 10; i++) {
            answer = $("input[name='q_opt_name_" + (i+1).toString() + "']:checked").val();
            if (answer === undefined) {
                asnweredAll = false
                break
            }
            if (answer === correct[i]) countCorrect += 1;
        }
        $('#result').remove()
        if (!asnweredAll) {
            $("#quiz-box").append ("<h2 id='result' style='color: red'> please, answer all questions !!!</h2>");
        } else {
            $("#quiz-box").append ("<h2 id='result' style='color: red'>Result of the quiz is: " + countCorrect + "</h2>");
        }
    });
});



