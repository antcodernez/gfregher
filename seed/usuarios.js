import bcrypt from 'bcrypt';

const usuarios = [
    {
        nombre: 'Jesus Antonio Estrada Jiménez',
        email: 'marshday5@gmail.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
];

export default usuarios