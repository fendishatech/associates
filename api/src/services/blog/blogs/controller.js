const { db } = require("../../../helper/mysql_client.js");

const getBlogs = (req, res) => {
  try {
    const q = "SELECT * FROM blogs";

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
        message: "Blogs list",
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

const getBlogById = async (req, res) => {
  try {
    const q = "SELECT * FROM blogs WHERE id = ?";

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
        message: "Blog Found",
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

const createBlog = async (req, res) => {
  const q =
    "INSERT INTO blogs(`firstName`, `lastName`, `email`, `title`, `jobPosition`) VALUES (?)";

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
      message: "Blog Created Successfully",
    });
  });
};

const updateBlog = async (req, res) => {
  const blogId = req.params.id;

  const q =
    "UPDATE blogs SET `firstName` =?, `lastName` =?, `email` =?, `title` =?, `jobPosition` =? WHERE `id` = ?";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.jobPosition,
  ];

  // REQUIRE ALL THE VALUES OF THE OLD BLOG DATA THATS NOT UPDATED
  db.query(q, [...values, blogId], (err, data) => {
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
      message: "Blog Updated Successfully",
    });
  });
};

const deleteBlog = async (req, res) => {
  const q = "DELETE FROM blogs WHERE `id` = ?";

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
      message: "Blog Deleted Successfully",
    });
  });
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
