const { db } = require("../../../helper/mysql_client.js");

const getCandidates = (req, res) => {
  try {
    const q = "SELECT * FROM candidates";

    db.query(q, (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          payload: null,
          message: err.message,
        });
      }

      return res.status(200).json({
        success: true,
        payload: data,
        message: "Candidates list",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

const getCandidateById = async (req, res) => {
  try {
    const q = "SELECT * FROM candidates WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          payload: null,
          message: err.message,
        });
      }
      // IF data IS EMPTY RETURN NOTICE
      return res.status(200).json({
        success: true,
        payload: data,
        message: "Candidate Found",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

const createCandidate = async (req, res) => {
  const q =
    "INSERT INTO candidates(`firstName`, `lastName`, `email`, `title`, `candidatePosition`) VALUES (?)";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.candidatePosition,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        payload: null,
        message: err.message,
      });
    }
    return res.status(200).json({
      success: true,
      payload: data,
      message: "Candidate Created Successfully",
    });
  });
};

const updateCandidate = async (req, res) => {
  const candidateId = req.params.id;

  const q =
    "UPDATE candidates SET `firstName` =?, `lastName` =?, `email` =?, `title` =?, `candidatePosition` =? WHERE `id` = ?";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.candidatePosition,
  ];

  // REQUIRE ALL THE VALUES OF THE OLD CANDIDATE DATA THATS NOT UPDATED
  db.query(q, [...values, candidateId], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        payload: null,
        message: err.message,
      });
    }
    return res.status(200).json({
      success: true,
      payload: data,
      message: "Candidate Updated Successfully",
    });
  });
};

const deleteCandidate = async (req, res) => {
  const q = "DELETE FROM candidates WHERE `id` = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        payload: null,
        message: err.message,
      });
    }

    return res.status(200).json({
      success: true,
      payload: data,
      message: "Candidate Deleted Successfully",
    });
  });
};

module.exports = {
  getCandidates,
  getCandidateById,
  createCandidate,
  updateCandidate,
  deleteCandidate,
};
