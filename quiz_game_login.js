function navigate()
{
    player1_turn = document.getElementById("name").value;
    player2_turn = document.getElementById("name2").value;
    localStorage.setItem("player1_turn", player1_turn);
    localStorage.setItem("player2_turn", player2_turn);
    window.location = "game_page.html";
}