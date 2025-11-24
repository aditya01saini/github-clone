const createRepository = (req, res) => {
  res.send("Repository created! ");
};

const getAllRepositories = (req, res) => {
  res.send("All repositories fetched!");
};

const fetchRepositoryById = (req, res) => {
  res.send("Repository Details Fetched!");
};

const fetchRepositoryByName = (req, res) => {
  res.send("Repository Details fetched!");
};

const fetchRepositoriesForCurrentUser = (req, res) => {
  res.send("Repsitory for logged in user fetched!");
};

const updateRepositoryById = (req, res) => {
  res.send("Repository Updated");
};

const toggleVisibilityById = (req, res) => {
  res.send("visibility toogled!");
};

const deleteRepositoryById = (req, res) => {
  res.send("Deleted Repository!");
};

module.exports = {
  createRepository,
  getAllRepositories,
  fetchRepositoryById,
  fetchRepositoryByName,
  fetchRepositoriesForCurrentUser,
  updateRepositoryById,
  toggleVisibilityById,
  deleteRepositoryById,
};
