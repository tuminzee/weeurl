var express = require('express');
var router = express.Router();
const { GeneralError, InternalServerError, InvalidUrlError, InvalidUrlCodeError } = require('../errors');
const {isValidUrl}  = require('../utils/isValidUrl');
const shortid = require('shortid');

const { getAllUrlsController, postUrlController, findUrlController, findUrlCodeController } = require('../controllers/urls');


router.get('/', async(req, res, next) => {
  try{
    let urls = await getAllUrlsController();
    res.status(200).send(urls);
  }
  catch(err){
    if(err instanceof GeneralError){
      next(err);
    }
    else{
      console.error(e);
      next(new InternalServerError(err.message));
    }
  }
})

router.post('/', async(req, res, next) => {
  try{
    const { url } = req.body;
    if(isValidUrl(url)){
      let response = await findUrlController(url);
      if(response){
        res.status(200).send(response);
      }
      else{
        let newUrl = await postUrlController(url);
        res.status(201).send(newUrl);
      }
    }
    else{
      const msg = `${url} is not a valid url`;
      next (new InvalidUrlError(msg));
    }
  }
  catch(err){
    if(err instanceof GeneralError){
      next(err);
    }
    else{
      console.error(err);
      next(new InternalServerError(err.message));
    }
  }
});

router.get('/:urlCode', async(req, res, next) => {
  try{
    const { urlCode } = req.params;
    if(shortid.isValid(urlCode)){
      let response = await findUrlCodeController(urlCode);
      if(response){
        res.status(200).send(response);
      }
      else{
        const msg = `${urlCode} is not a valid url code`;
        next( new InvalidUrlCodeError(msg));
      }
    }
    else{
      const msg = `${urlCode} is not a valid url code`;
      next( new InvalidUrlCodeError(msg));
    }
  }
  catch(err){
    if(err instanceof GeneralError){
      next(err);
    }
    else{
      console.error(err);
      next(new InternalServerError(err.message));
    }
  }
});

module.exports = router;
