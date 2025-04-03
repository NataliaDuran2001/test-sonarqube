const express = require('express');
const router = express.Router();

// Base de datos simulada de usuarios
const users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'María López', email: 'maria@example.com' },
  { id: 3, name: 'Carlos Gómez', email: 'carlos@example.com' }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ users: users });
});

/* GET user by ID. */
router.get('/:id', function(req, res, next) {
  // Vulnerabilidad deliberada: falta validación de parámetros
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (user) {
    res.json(user);
  } else {
    // Error potencial para SonarQube: mensaje de error detallado
    res.status(404).json({ error: `Usuario con ID ${id} no encontrado en la base de datos` });
  }
});

/* POST create user. */
router.post('/', function(req, res, next) {
  // Vulnerabilidad deliberada: falta validación de entrada
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

/* PUT update user. */
router.put('/:id', function(req, res, next) {
  // Code smell: repetición de código, falta de validación
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex !== -1) {
    users[userIndex] = {
      ...users[userIndex],
      ...req.body
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

/* DELETE user. */
router.delete('/:id', function(req, res, next) {
  // Problemas potenciales para SonarQube
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex !== -1) {
    var deletedUser = users[userIndex]; // Uso de var en lugar de const
    users.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

module.exports = router;
