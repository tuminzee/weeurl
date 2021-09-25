const Urls = require('../../models/urls');
const shortid = require('shortid');

const getAllUrlsController = async () => {
    try{
        const urls = await Urls.find();
        return urls;
    } catch(err){
       throw err;
    }
};

const postUrlController = async (url) => {
    try{
        const urlCode = shortid.generate();
        const newUrl = new Urls({
            url,
            urlCode
        });
        return newUrl.save();
    }
    catch(err){
        throw err;
    }
}

const findUrlController = async (url) => {
    try{
        const response = await Urls.findOne({url : url});
        return response;
    }
    catch(err){
        throw err;
    }
}

const findUrlCodeController = async (urlCode) => {
    try{
        const response = await Urls.findOne({urlCode : urlCode});
        return response;
    }
    catch(err){
        throw err;
    }
}


module.exports = {
    getAllUrlsController,
    postUrlController,
    findUrlController,
    findUrlCodeController
}