//MiddleWare function
const moment = require ('moment');

const logger = (req, res, next) => {
    console.log("MiddleWare is runnning...>>>");
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`
        );
    next();
  };
  
 module.export = logger;

  