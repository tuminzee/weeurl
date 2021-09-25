const GeneralError = require('../errors/GeneralError')


const handleErrors = (err, req, res, next) => {
    if (err instanceof GeneralError) {
        if (err.message) {
            if(err.moreInfo.length == 0){
                err.moreInfo.push({ msg: err.message })
            }
        }
        res.status(err.status)
        return res.send({
            status: 'error',
            message: err.message,
            moreInfo: err.moreInfo,
            errorName: err.errorName ? err.errorName : "Error"
        })
    }

    if (err instanceof Error) {
        return res.status(500).send({
            status: 'error',
            message: err.message
        });
    }

}


module.exports = handleErrors;