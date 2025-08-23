const User = require('../models/userModel')

// Get all users
exports.getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "Database error occurred",
        error: err
      })
    }
    res.json({
      status: 200,
      data: results,
      message: "Users retrieved successfully"
    })
  })
}

// Get user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params
  User.getById(id, (err, results) => {
    if (err) throw err
    if (results.length > 0) {
      res.json({
        status: 200,
        data: results[0],
        message: "User details retrieved successfully"
      })
    } else {
      res.status(404).json({
        status: 404,
        message: `User with ID '${id}' not found`
      })
    }
  })
}

// Create user
exports.createUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to create user", error: err })
    }
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId
    })
  })
}

// Update user
exports.updateUser = (req, res) => {
  const { id } = req.params
  User.update(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to update user", error: err })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({
      message: "User updated successfully",
      updatedId: id
    })
  })
}

// Delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params
  User.delete(id, (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) {
      res.json({ message: `User with ID ${id} has been deleted successfully` })
    } else {
      res.status(404).json({ message: `User with ID ${id} not found` })
    }
  })
}
