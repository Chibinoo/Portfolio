function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        //document.querySelector(".toggle-btn").innerText = "Toggle Dark Mode";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        //document.querySelector(".toggle-btn").innerText = "Toggle Light Mode";
    }
}