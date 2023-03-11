const mongoose = require("mongoose");

const databaseConnection = () => {
    mongoose.connect(
      process.env.MONGOURL,
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      },
      function (err, data) {
        if (err) {
          console.log(err);
        }
        console.log('database connected');
        return;
    }
    )
};

module.exports = databaseConnection;