function addUser(){
player1 = document.getElementById("player1_name_input");
player2 = document.getElementById("player2_name_input");

localStorage.setItem("player1", player1);
localStorage.setItem("player2", player2);

window.location.replace("game_page.html")
}
