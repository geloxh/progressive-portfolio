function headerManager() {
    const headerDiv = document.getElementById('HeaderManager');
    headerDiv.innerHTML = `
        <ul class="nav-menu">
            <li><a href="">Home</a></li>
            <li><a href="">Background</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li><<a href="">Blogs</a></li>
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', headerManager);