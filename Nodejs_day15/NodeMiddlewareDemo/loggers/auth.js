function auth(req,res,next){
    const isLoggedIn = true;
    if(isLoggedIn){
        console.log("User is logged in");
        next();
    }
    else{
        res.end("unauthorized");
    }
}
module.exports = auth;