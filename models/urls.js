const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    urlCode: {
      type: String,
      unique: true,   
      required: "Url Code is required!"
    },
    url: {
      type: String,
      // unique: true,
      required: "Url is required!"
    },
  }, {
    timestamps: true
  });


const Urls = mongoose.model('Urls', schema);
module.exports = Urls;