const menu = document.getElementsByClassName("header__mobile_menu")[0];
const toggler = document.getElementsByClassName("header__toggler")[0];

let menuIsVisibile = false;

function ToggleMenu()
{
    if (menuIsVisibile)
    {
        menu.style.transform = "scale(0)";
        toggler.src = "./images/icon-hamburger.svg";
    }
    else
    {
        menu.style.transform = "scale(1)";
        toggler.src = "./images/icon-close.svg"
    }
    menuIsVisibile = !menuIsVisibile;
}