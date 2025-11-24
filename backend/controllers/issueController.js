const createIssue = (req, res) => {
  res.send("Issue Created!");
};

const updateIssueById = (req, res) => {
  res.send("Issue updated");
};

const deleteIssueById = (req, res) => {
  res.send("dateted Issue");
};

const getAllIssues = (req, res) => {
  res.send("All issues fetched");
};
const getIssueById = (req, res) => {
  res.send("Issue details fetched");
};

module.exports = {
    createIssue,
    updateIssueById,
    deleteIssueById,
    getAllIssues,
    getIssueById
}

