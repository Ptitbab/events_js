// ######################################## FONCTION 1 ############################################################

var foot = document.querySelector("footer");
var x = 1


function clickCount() {
        console.log(`clic numero ${x}`);
        x += 1;
}

foot.addEventListener("click", clickCount);


// ######################################## FONCTION 2 ############################################################

var menuBtn = document.querySelector("button.navbar-toggler")
var hamburger = document.querySelector("div#navbarHeader");
let coll = true

function removeAddCollapse() {
    if (coll === true) {
        hamburger.classList.remove("collapse");
        coll = false
    } else if (coll === false) {
        hamburger.classList.add("collapse")
        coll = true
    }   
}

menuBtn.addEventListener("click", removeAddCollapse);


// ######################################## FONCTION 3 ############################################################

var editBtn = document.querySelector("button.btn.btn-sm.btn-outline-secondary");

function colorRed() {
    editBtn.style.color = "red"
}

editBtn.addEventListener("click", colorRed);

// ######################################## FONCTION 4 ############################################################

var editBtn2 = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];
var vert = false

function changeToGreen() {
    if (vert === false) {
        editBtn2.style.color = "green";
        vert = true
    } else if (vert === true) {
        editBtn2.style.color = null;
        vert = false
    }   
}

editBtn2.addEventListener("click", changeToGreen)

// ######################################## FONCTION 5 ############################################################

var nav = document.querySelector("header")
var link = document.querySelector("link")
var boot = true


function removeBoostrap(e) {
    if (boot === true) {
        document.querySelector("head").removeChild(link)
        boot = false
        e.stopPropagation()
    }
}

function addBoostrap() {
    if (boot === false) {
        document.querySelector("head").appendChild((link))
        boot = true
    }
}

nav.addEventListener("dblclick", removeBoostrap)

document.addEventListener("dblclick", addBoostrap)


// ######################################## FONCTION 6 ############################################################


var viewButtons = document.querySelectorAll("button.btn.btn-sm.btn-success")
var reduced = false


function reduce() {
    var card = this.closest("div.col-md-4")
    var p = card.querySelector("p")
    var image = card.querySelector("div img")
    if (reduced === false) {
        p.style.display = "none"
        image.style.height = "20%";
        image.style.width = "20%";
        reduced = true
    } else if (reduced === true) {
        p.style.display = "block"
        image.style.height = "100%";
        image.style.width = "100%";
        reduced = false
    }
}


viewButtons.forEach(function(button) {
    button.addEventListener("mouseover", reduce)
})

// ######################################## FONCTION 7 ############################################################


