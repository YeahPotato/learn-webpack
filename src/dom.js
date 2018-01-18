import './style/index.css';


let user = document.createElement('img');
user.src = require('./images/user.jpg');
user.style.width = '150px';
document.body.appendChild(user);

export default user;