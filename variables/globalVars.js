module.exports = {
  PORT: process.env.PORT || 3001,
  URI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_GLOBALNAME}?retryWrites=true&w=majority`,
};
