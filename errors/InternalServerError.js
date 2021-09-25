const GeneralError = require('./GeneralError')

class InternalServerError extends GeneralError {

    constructor(message = "Internal Server Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 500;
        this.moreInfo = moreInfo
        this.errorName = "InternalServerError"
    }

}


module.exports = InternalServerError