const { db } = require("../../../helper/mysql_client.js");

const getJobs = (req, res) => {
  try {
    const q = "SELECT * FROM jobs";

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
        message: "Jobs list",
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

const getJobById = async (req, res) => {
  try {
    const q = "SELECT * FROM jobs WHERE id = ?";

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
        message: "Job Found",
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

const createJob = async (req, res) => {
  const q =
    "INSERT INTO jobs(`title`, `level`, `deadline`, `edu_level`, `experience`, `description`, `requirements`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.level,
    req.body.deadline,
    req.body.edu_level,
    req.body.experience,
    req.body.description,
    req.body.requirements,
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
      message: "Job Created Successfully",
    });
  });
};

const updateJob = async (req, res) => {
  const jobId = req.params.id;

  const q =
    "UPDATE jobs SET `title` = ?, `level` = ?, `deadline` = ?, `edu_level` = ?, `experience` = ?, `description` = ?, `requirements` = ? WHERE `id` = ?";

  const values = [
    req.body.title,
    req.body.level,
    req.body.deadline,
    req.body.edu_level,
    req.body.experience,
    req.body.description,
    req.body.requirements,
  ];

  // REQUIRE ALL THE VALUES OF THE OLD JOB DATA THATS NOT UPDATED
  db.query(q, [...values, jobId], (err, data) => {
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
      message: "Job Updated Successfully",
    });
  });
};

const deleteJob = async (req, res) => {
  const q = "DELETE FROM jobs WHERE `id` = ?";

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
      message: "Job Deleted Successfully",
    });
  });
};

module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
