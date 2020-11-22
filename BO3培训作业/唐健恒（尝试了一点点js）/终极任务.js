function scrollToViewMENU () {
    document.getElementById('MENU').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function scrollToViewABOUT () {
    document.getElementById('ABOUT').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function scrollToViewEVENTS () {
    document.getElementById('RESERVATIONS').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function scrollToViewRESERVATIONS () {
    document.getElementById('RESERVATIONS').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function scrollToViewCONTACT () {
    document.getElementById('CONTACT').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function scrollToViewNAVIGATION () {
    document.getElementById('NAVIGATION').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}
function myFunction1() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function myFunction2() {
    alert("你这个年轻人，不讲武德，来，骗！来，偷袭！我69岁的老饭店。这好吗？这不好。我劝这位年轻人，来一份本店特色耗子尾汁, 好好反思。（现在下单还送松果糖豆闪电鞭哟！）");
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}