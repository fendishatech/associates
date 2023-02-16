/* -------------------------------------------------------------------------- */
/* ------------------------------- WITH MYSQL ------------------------------ */
/* -------------------------------------------------------------------------- */
const { db } = require("../../../helper/mysql_client.js");

const getAuthors = (req, res) => {
  try {
    const q = "SELECT * FROM authors";

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
        message: "Authors list",
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

const getAuthorById = async (req, res) => {
  try {
    const q = "SELECT * FROM authors WHERE id = ?";

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
        message: "Author Found",
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

const createAuthor = async (req, res) => {
  const q =
    "INSERT INTO authors(`firstName`, `lastName`, `email`, `title`, `jobPosition`) VALUES (?)";

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
      message: "Author Created Successfully",
    });
  });
};

const updateAuthor = async (req, res) => {
  const authorId = req.params.id;

  const q =
    "UPDATE authors SET `firstName` =?, `lastName` =?, `email` =?, `title` =?, `jobPosition` =? WHERE `id` = ?";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.title,
    req.body.jobPosition,
  ];

  // REQUIRE ALL THE VALUES OF THE OLD AUTHOR DATA THATS NOT UPDATED
  db.query(q, [...values, authorId], (err, data) => {
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
      message: "Author Updated Successfully",
    });
  });
};

const deleteAuthor = async (req, res) => {
  const q = "DELETE FROM authors WHERE `id` = ?";

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
      message: "Author Deleted Successfully",
    });
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
/* ^ -------------------------------------------------------------------------- */
/* ^ ------------------------------- WITH PRISMA ------------------------------ */
/* ^ -------------------------------------------------------------------------- */

// import prisma from "../../../helper/prisma_client.js";

// export const getAuthors = async (req, res) => {
//   try {
//     const authors = await prisma.author.findMany();

//     res.status(200).json({
//       success: true,
//       payload: authors,
//       message: "Authors list",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       payload: null,
//       message: error.message,
//     });
//   }
// };

// export const getAuthorById = async (req, res) => {
//   try {
//     const author = await prisma.author.findUnique({
//       where: {
//         id: Number(req.params.id),
//       },
//     });

//     res.status(200).json({
//       success: true,
//       payload: author,
//       message: "Author Found",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       payload: null,
//       message: error.message,
//     });
//   }
// };

// export const createAuthor = async (req, res) => {
//   try {
//     const authorData = req.body;

//     const author = await prisma.author.create({
//       data: {
//         firstName: authorData.firstName,
//         lastName: authorData.lastName,
//         email: authorData.email,
//         title: authorData.title,
//         jobPosition: authorData.jobPosition,
//       },
//     });

//     res.status(200).json({
//       success: true,
//       payload: author,
//       message: "Author Created Successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       payload: null,
//       message: error.message,
//     });
//   }
// };

// export const updateAuthor = async (req, res) => {
//   try {
//     const author = await prisma.author.update({
//       where: {
//         id: Number(req.params.id),
//       },
//       data: {
//         ...req.body,
//       },
//     });

//     res.status(200).json({
//       success: true,
//       payload: author,
//       message: "Author Updated Successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       payload: null,
//       message: error.message,
//     });
//   }
// };

// export const deleteAuthor = async (req, res) => {
//   try {
//     const author = await prisma.author.delete({
//       where: {
//         id: Number(req.params.id),
//       },
//     });

//     res.status(200).json({
//       success: true,
//       payload: author,
//       message: "Author Deleted Successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       payload: null,
//       message: error.message,
//     });
//   }
// };
