function send()
{
num_1 = document.getElementById("num1").value;
num_2 = document.getElementById("num2").value;
ques_created = parseInt(num_1)*parseInt(num_2);
question_display = "<h4>"+num_1+" X "+num_2+"</h4>";
input_display = "<input id='answer' type='number' class='form-control' placeholder='Answer'>";
button_display = "<button id='check' class='btn btn-info' onclick='check_conditions()'>Check</button>";
h4_display = "<h4 id='correct_wrong'></h4>";
div_display = question_display + input_display + h4_display + button_display;
document.getElementById("output").innerHTML = div_display;
}

function check_conditions()
{
//checking the answer
    ans_got = document.getElementById("answer").value;
    if (ans_got == ques_created)
    {
     correct = document.getElementById("correct_wrong").innerHTML = "<h4 class='text-success'>Correct Answer!";
    } else{
        correct = document.getElementById("correct_wrong").innerHTML = "<h4 class='text-danger'>Wrong Answer!</h4>"
    }
//checking if answer input is blank
    ans_input_check = document.getElementById("answer").value;
    if (ans_input_check == "")
    {
     window.alert("Type your answer in the Input box to check");   
     correct = document.getElementById("correct_wrong").innerHTML="";
    }
}