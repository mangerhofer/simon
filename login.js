function login() {
    const nameEL = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'play.html';
}