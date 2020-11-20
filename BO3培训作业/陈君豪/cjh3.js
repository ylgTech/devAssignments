window.onload = function () {


    var text = document.getElementsByClassName('input-box');
    text[0].onfocus = function () {
        if (text[0].value === 'Name*') {
            text[0].value = "";
            text[0].style.color = '#222';
        }
    }
    text[0].onblur = function () {
        if (text[0].value === '') {
            text[0].value = 'Name*';
            text[0].style.color = 'rgb(150, 150, 150)'
        }
    }
    text[1].onfocus = function () {
        if (text[1].value === 'Date*') {
            text[1].value = "";
            text[1].style.color = '#222';
        }
    }
    text[1].onblur = function () {
        if (text[1].value === '') {
            text[1].value = 'Date*';
            text[1].style.color = 'rgb(150, 150, 150)'
        }
    }
    text[2].onfocus = function () {
        if (text[2].value === 'Time*') {
            text[2].value = "";
            text[2].style.color = '#222';
        }
    }
    text[2].onblur = function () {
        if (text[2].value === '') {
            text[2].value = 'Time*';
            text[2].style.color = 'rgb(150, 150, 150)'
        }
    }
    text[3].onfocus = function () {
        if (text[3].value === 'Commensales*') {
            text[3].value = "";
            text[3].style.color = '#222';
        }
    }
    text[3].onblur = function () {
        if (text[3].value === '') {
            text[3].value = 'Commensales*';
            text[3].style.color = 'rgb(150, 150, 150)'
        }
    }

    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            document.getElementById("header-nav").classList.add("header-navigation2");
            document.getElementById("header-nav").classList.remove("header-navigation");

        } else {
            document.getElementById("header-nav").classList.remove("header-navigation2");
            document.getElementById("header-nav").classList.add("header-navigation");
        }
    })


}

