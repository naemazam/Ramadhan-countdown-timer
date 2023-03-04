function identify() {
    if (localStorage.getItem("theme") == "dark") {
        setDark(true);
        document.getElementById("switch").checked = true;
    } else {
        setDark(false);
    }
}

function setDark(Dark) {
    if (Dark) {
        document.body.setAttribute("id", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("id", "light");
        localStorage.removeItem("theme");
    }
}

function toggleCheck() {
    if (document.getElementById("switch").checked == true) {
        setDark(true);
    } else {
        setDark(false);
    }
}