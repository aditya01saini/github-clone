const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

async function createIssue(req, res) {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    const issue = new Issue({
      title,
      description,
      repository: id,
    });

    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    console.error("Error during issue creation : ", err.message);
    res.status(500).send("Server errror!");
  }
}

async function updateIssueById(req, res) {
  const { id } = req.params;
  const { title, description, status } = req.params;
  try {
    const issue = await Issue.findById(id);
    if (!issue) {
      return res.status(404).json({ error: "Issue not found!" });
    }

    issue.title = title;
    issue.description = description;
    issue.status = status;

    await issue.save();
    res.json(issue, { message: "issue updated successfully!" });
  } catch (err) {
    console.error("Error during issue update", err.message);
    res.status(500).send("Server errror!");
  }
}

async function deleteIssueById(req, res) {
  const { id } = req.params;
  try {
    const issue = await Issue.findByIdAndDelete(id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found!" });
    }

    res.json(issue, { message: "issue deleted successfully!" });
  } catch (err) {
    console.error("Error during issue deletion : ", err.message);
    res.status(500).send("Server errror!");
  }
}

async function getAllIssues(req, res) {
  const { id } = req.pqrams;
  try {
    const issues = await Issue.find({ repository: id });
    if (!issues) {
      return res.status(404).json({ error: "Issues not found!" });
    }
    res.status(200).json(issues);
  } catch (err) {
    console.error("Error during", err.message);
    res.status(500).send("Server errror!");
  }
}
async function getIssueById(req, res) {
  const {id} = req.params;
  try {
    const issue = await Issue.findById(id);
    if(!issue){
      return res.status(404).json({error: "issue not found!"});
    }
    res.json(issue, {message: "geeting issue successfully"})
  } catch (err) {
    console.error("Error during issue geeting : ", err.message);
    res.status(500).send("Server errror!");
  }
}

module.exports = {
  createIssue,
  updateIssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};
