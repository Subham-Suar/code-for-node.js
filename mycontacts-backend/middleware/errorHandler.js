 const constants  = require('../constants')
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode? res.statusCode :500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({tittle:'validation failed',message:err.message ,stackTrace: err.stack})
           

        case constants.NOTFOUND:
            req.json({title:'Not found',
               message:err.message ,stackTrace: err.stack 
            })
          
        case constants.FORBIDDEN:
            req.json({title:'Forbidden',
               message:err.message ,stackTrace: err.stack 
            })
           
        case constants.SERVER_ERROR:
            req.json({title:'Server Error',
               message:err.message ,stackTrace: err.stack 
            })
            
        default:
            console.log("No error, All good !");
            
            break;

    }
    
}

module.exports = errorHandler