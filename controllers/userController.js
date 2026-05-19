const User = require('../models/userModel');

// 1. CREATE - Naya User Banayein
exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = await User.create({ name, email, age });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 2. READ - Sabhi Users Ko Dekhein
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, count: users.length, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3. READ - Kisi Ek User Ko ID Se Dekhein
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User nahi mila" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: "Galat ID format ya error" });
    }
};

// 4. UPDATE - User Details Update Karein
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true 
        });
        if (!user) {
            return res.status(404).json({ success: false, message: "User nahi mila" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 5. DELETE - User Delete Karein
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User successfully deleted" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};