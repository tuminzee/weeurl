const GeneralError = require('./GeneralError')

class InvalidUrlError extends GeneralError {

    constructor(message = "InvalidUrlError", moreInfo = []) {
        super();
        this.message = message;
        this.status = 400;
        this.moreInfo = moreInfo
        this.errorName = "InvalidUrlError"
    }

}


module.exports = InvalidUrlError