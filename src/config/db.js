const mongoose = require("mongoose");

exports.makeDb = () => {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@econix.yo3da.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  mongoose.set("useFindAndModify", false);
};