const GeneralError = require('./GeneralError')

class InvalidUrlCodeError extends GeneralError {

    constructor(message = "InvalidUrlCodeError", moreInfo = []) {
        super();
        this.message = message;
        this.status = 400;
        this.moreInfo = moreInfo
        this.errorName = "InvalidUrlCodeError"
    }

}


module.exports = InvalidUrlCodeError