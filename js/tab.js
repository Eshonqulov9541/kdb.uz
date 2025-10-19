function openTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSecondTabs(evt, tabSecondName) {
    var ii, secondTabcontent, secondTablinks;
    secondTabcontent = document.getElementsByClassName("secondTabcontent");
    for (ii = 0; ii < secondTabcontent.length; ii++) {
      secondTabcontent[ii].style.display = "none";
    }
    secondTablinks = document.getElementsByClassName("secondTablinks");
    for (ii = 0; ii < secondTablinks.length; ii++) {
      secondTablinks[ii].className = secondTablinks[ii].className.replace(" active", "");
    }
    document.getElementById(tabSecondName).style.display = "block";
    evt.currentTarget.className += " active";
}