const jwt = require('jsonwebtoken')


function auth(req,res,next){
    try{
        //do they have a token?
        const authToken = req.cookies.token;
        if(!authToken){
            return res.status(401).send({errorMessage: "First off, you dont have the right"})
        }
        //just because they have a token doesnt mean its ours so we validate its ours below
        const uniqueToken = jwt.verify( authToken, process.env.JWT_SECRETPASS)
        req.user = uniqueToken.user;
        //next to passes out of the middleware w/ express
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({errorMessage: "First off, you dont have the right"});
    }
}

module.exports = auth;