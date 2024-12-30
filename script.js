// Vérifier si un utilisateur est déjà connecté au chargement de la page
window.addEventListener('load', function () {
  const loggedUser = localStorage.getItem('currentUser');
  if (loggedUser) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('game-selection-container').style.display = 'block';
  }
});

// Gestion de l'inscription et de la connexion
document.getElementById('auth-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    // Stocker l'utilisateur connecté dans le localStorage
    const user = { username, password };
    localStorage.setItem('currentUser', JSON.stringify(user));

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('game-selection-container').style.display = 'block';
  } else {
    alert('Veuillez entrer un nom d\'utilisateur et un mot de passe.');
  }
});

// Fonction pour démarrer un jeu
function startGame(gameNumber) {
  alert('Lancement du jeu ' + gameNumber);
}

// Ajouter un bouton de déconnexion si nécessaire
function logout() {
  localStorage.removeItem('currentUser');
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('game-selection-container').style.display = 'none';
}
