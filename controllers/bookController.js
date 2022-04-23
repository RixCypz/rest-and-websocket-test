const Books = require("../models/book");

exports.addBook = async (req, res, next) => {
  try {
    let book = new Books ({name:"The story of my virginity",
            author:"Fanhin",
            price:"124",
            page:"244"})
    // await Books.insertMany(book);
    await book.save();
    console.log("insert completed");
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

exports.findBooks = async (req, res, next) => {
  try {
    let book = await Books.find();
    if (!book) {
      const error = new Error("Error!");
      error.statusCode = 404;
      throw error;
    }
    console.log("Find all books");
    res.status(200).json(book);

  } catch (error) {
    next(error);
  }
};

exports.deleteBooks = async (req, res, next) => {
  try {
    let book = await Books.deleteOne({name:"birds in wonderland"});
    if (!book) {
      const error = new Error("Error!");
      error.statusCode = 404;
      throw error;
    }
    console.log("deleted");
    res.status(200).json(book);

  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    let book = await Books.findOne({author:"Fanhin"});
        book.author = "NongWit";
    await book.save();
    if (!book) {
      const error = new Error("Error!");
      error.statusCode = 404;
      throw error;
    }
    console.log("updated");
    res.status(200).json(book);

  } catch (error) {
    next(error);
  }
};