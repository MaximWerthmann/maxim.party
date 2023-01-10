function sidebar_open() {
    sidebar.style.left = '0px'; 
    sidebar_open_button.style.display = 'none';
}

function sidebar_close() {
    sidebar.style.left = '-100%';
    sidebar_open_button.style.display = 'block';
}