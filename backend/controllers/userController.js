const getAllUsers = (req, res) => {
  console.log("All user fetched!");
};

const signup = (req, res) => {
  res.send("signing up!");
};

const login = (req, res) => {
  res.send("loggin in!");
};

const getUserProfile = (req, res) => {
  res.send("Profile fetched!");
};

const updateUserProfile = (req, res) => {
  res.send("profile Updated!");
};

const deletwUserProfile = (req, res) => {
  res.send("Profile Deleted!!");
};

module.exports = {
  getAllUsers,
  signup,
  login,
  getUserProfile,
  updateUserProfile,
  deletwUserProfile,
};
