const { db } = require("../../helper/mysql_client.js");

const getExperiences = (req, res) => {
  try {
    const q = "SELECT * FROM experiences";

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
        message: "Experiences list",
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

const getExperienceById = async (req, res) => {
  try {
    const q = "SELECT * FROM experiences WHERE id = ?";

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
        message: "Experience Found",
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

const createExperience = async (req, res) => {
  const q =
    "INSERT INTO experiences(`firstName`, `lastName`, `email`, `title`, `jobPosition`) VALUES (?)";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.jobPosition,
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
      message: "Experience Created Successfully",
    });
  });
};

const updateExperience = async (req, res) => {
  const experienceId = req.params.id;

  const q =
    "UPDATE experiences SET `firstName` =?, `lastName` =?, `email` =?, `title` =?, `jobPosition` =? WHERE `id` = ?";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.jobPosition,
  ];

  // REQUIRE ALL THE VALUES OF THE OLD EXPERIENCE DATA THATS NOT UPDATED
  db.query(q, [...values, experienceId], (err, data) => {
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
      message: "Experience Updated Successfully",
    });
  });
};

const deleteExperience = async (req, res) => {
  const q = "DELETE FROM experiences WHERE `id` = ?";

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
      message: "Experience Deleted Successfully",
    });
  });
};

module.exports = {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
