const GeneralError = require('./GeneralError')

class MongooseError extends GeneralError {

    constructor(message = "Mongoose Error", moreInfo = []) {
        super();
        this.message = message;
        this.status = 500;
        this.moreInfo = moreInfo
        this.errorName = "MongooseError"
    }

}


module.exports = MongooseError