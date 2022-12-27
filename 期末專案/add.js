function addFoodPicture() {
    let count = 1, id = "", pic;
    text = "<tbody id = 'foodPic'>";
    for (let i = 1; i <= 5; i++) {
        text += "<tr>"
        for (let j = 1; j <= 4; j++) {
            text += "<td><img class = 'pic' src = '" + count + ".jpg' id = '" + foodName[count] + "'></td>";
            count++;
        }
        text += "</tr>";
    }
    text += "</tbody>";
    document.getElementById("foodtable").innerHTML += text;
    // for (let i = 1; i <= 20; i++) {
    //     pic = document.getElementById(foodName[i]);
    //     if(pic){
    //         pic.addEventListener(
    //             "click", function() { clickFoodPic(i); }, false );
    //     }
    // }
}
function addFoodStyle() {
    text = "";
    for (let i = 1; i <= 8; i++) {
        text +=
            "<span class='card' style='width: 275px;' id = '"+foodStyleName[i]+"'>" +
                "<span class='card-body'>" +
                "<p class='card-text'>" + foodStyleName[i] + "</p>" + "</span>" +
                "<img class='card-img-top foodpic' src='" + i + ".png'>" +
            "</span>";
    }
    document.getElementById("foodStyle").innerHTML = text;
    
    // for (let i = 1; i <= 20; i++) {
    //     pic = document.getElementById(foodStyleName[i]);
    //     if(pic){
    //         pic.addEventListener(
    //             "click", function() { clickFoodStyle(i); }, false );
    //     }
    // }
}
function hide(){
    $('#foodStyle').hide(600);
    $("#foodPic").hide(600);
    $("#carouselExampleControls").hide(500);
    $("#showRandomFood").hide(500);
    $('#buttons').hide();
    $('#foodtable').hide();
    $('#showRandomFood').hide();
}
            
function randomSelect(){
    console.log(flag);
    let r;
    switch(flag){
        case 1:
            hide();
            $('#showRandomFood').show(500);
            r = Math.floor((Math.random() * 20) + 1);
            text = "<th colspan = '3' id = 'randomFood'>";
            text +=
            "<span class='card' style='width: 373px; height: 373px;' >" +
                "<span class='card-body'>" +
                "<p class='card-text'>今天吃" + foodName[r] + "!</p>" + "</span>" +
                "<img class='card-img-top foodCard' src='" + r + ".jpg'>" +
            "</span>";
            text += "</th>"; 
            document.getElementById("showRandomFood").innerHTML = text;
            //document.getElementById("foodtable").setAttribute("display", "");
        break;
        case 2:
            hide();
            $('#showRandomFood').show(500);
            r = Math.floor((Math.random() * 8) + 1);
            text = "<th colspan = '3' id = 'randomFood'>";
            text +=
            "<span class='card' style='width: 373px; height: 373px;' >" +
                "<span class='card-body'>" +
                "<p class='card-text'>今天吃" + foodStyleName[r] + "!</p>" + "</span>" +
                "<img class='card-img-top foodCard' src='" + r + ".png'>" +
            "</span>";
            text += "</th>"; 
            document.getElementById("showRandomFood").innerHTML = text;

        break;
    }
}