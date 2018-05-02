function search(e) {
    if (e.keyCode == 13) {
        var val = document.getElementById("search-field").value; 
        window.location = "https://duckduckgo.com/?q=" + val;
        return false;
    }
}