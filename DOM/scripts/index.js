// document.firstElementChild.lastElementChild.getElementsByTagName("li").item(2).innerHTML = "DuckDuckGo";

/*
    A more optimal solution, query the entire DOM tree for the <ul> tag, select last child from the
    <ul> parent.
 */
document.querySelector('ul').lastElementChild.innerHTML = "DuckDuckGo";
document.querySelector('ul .item a').style.color = "red";
document.querySelector('ul .item a').style.fontS
