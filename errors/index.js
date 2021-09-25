const GeneralError = require('./GeneralError');

const MongooseError = require('./MongooseError');
const InternalServerError = require('./InternalServerError');
const InvalidUrlError = require('./InvalidUrlError');
const InvalidUrlCodeError = require('./InvalidUrlCodeError');

module.exports = {
    GeneralError,
    MongooseError,
    InternalServerError,
    InvalidUrlError,
    InvalidUrlCodeError

}