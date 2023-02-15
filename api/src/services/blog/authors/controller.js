import prisma from "../../../helper/prisma_client.js";

export const getAuthors = async (req, res) => {
  try {
    const authors = await prisma.author.findMany();

    res.status(200).json({
      success: true,
      payload: authors,
      message: "Authors list",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await prisma.author.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      payload: author,
      message: "Author Found",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const authorData = req.body;

    const author = await prisma.author.create({
      data: {
        firstName: authorData.firstName,
        lastName: authorData.lastName,
        email: authorData.email,
        title: authorData.title,
        jobPosition: authorData.jobPosition,
      },
    });

    res.status(200).json({
      success: true,
      payload: author,
      message: "Author Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const author = await prisma.author.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
      },
    });

    res.status(200).json({
      success: true,
      payload: author,
      message: "Author Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const author = await prisma.author.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({
      success: true,
      payload: author,
      message: "Author Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: null,
      message: error.message,
    });
  }
};
