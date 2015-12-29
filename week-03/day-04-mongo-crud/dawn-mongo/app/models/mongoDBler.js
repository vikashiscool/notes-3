var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/test");

var ourBooks = require("./books.json");


var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    genre: String,
    ISBN: Number
});


var Book = mongoose.model('Book', BookSchema);

var book1 = new Book({title: "Jurassic Park"});
book1.author = "Michael Crichton";
book1.description = "Uhh... Life... Life finds a way.";
book1.genre = 'fiction';
book1.ISBN = 9780345538987;
//book.save();


Book.find({title: "Jurassic Park"}, function(err, found){
  var foundTitle = found;
  console.log("Found: \n",foundTitle);
});



var martianBook = new Book({title: "The Martian"});
martianBook.author = "Andy Weir";
martianBook.description = "A tale of survival on Mars.";
martianBook.genre = 'fiction';
martianBook.ISBN = 9780091956141;

Book.find({author: "Andy Weir"}, function(err, found){
  var foundTitle = found;
  console.log("Found: \n", foundTitle);
});

//TODO: Add three unique books


//TODO: Find and display three different books using three different methods
// For example, find by title, find by author, and find by ISBN.