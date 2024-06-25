const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb is connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = connectDatabase;


//locally

// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose.set("strictQuery", false);
//   mongoose
//     .connect("mongodb://127.0.0.1:27017/test", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((data) => {
//       console.log(`mongodb is connected with server: ${data.connection.host}`);
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB:", error);
//     });
// };

// module.exports = connectDatabase;

