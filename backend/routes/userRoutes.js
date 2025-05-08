const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// @route   GET /api/users
// @desc    Get all users
// @access  Public (should be protected in production)
router.get('/', userController.getUsers);

// @route   POST /api/auth/login
// @desc    Login user & get token
// @access  Public
router.post('/login', userController.login);

// @route   GET /api/users/search
// @desc    Search users
// @access  Public (should be protected in production)
router.get('/search', userController.searchUsers);

// @route   GET /api/users/teachers
// @desc    Get all teachers
// @access  Public (should be protected in production)
router.get('/teachers', userController.getAllTeachers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public (should be protected in production)
router.get('/:id', userController.getUserById);

// @route   POST /api/users
// @desc    Create a user
// @access  Public (should be protected in production)
router.post('/', userController.createUser);

// @route   POST /api/users/bulk/csv
// @desc    Bulk create users from CSV file
// @access  Public (should be protected in production)
router.post('/bulk/csv', upload.single('file'), userController.bulkCreateUsersFromCSV);

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public (should be protected in production)
router.put('/:id', userController.updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public (should be protected in production)
router.delete('/:id', userController.deleteUser);

// @route   GET /api/users/teachers
// @desc    Get all teachers
// @access  Public (should be protected in production)

module.exports = router; 