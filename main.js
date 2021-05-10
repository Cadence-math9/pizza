menu_list_array = [
    "Hawaiian",
    "meat lover",
    "Ham and cheese",
    "Mexican",
    "Canadian",
    "Veggie lover"];
function getmenu() {
    var htmldata; htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) { htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>' }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_items() {
    var htmldata;
    var item = document.getElementById("add_items").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) { htmldata = htmldata + '<div class = "cards">' + '<img src="">' + menu_list_array[i] + '</div>' }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}