const auth = (req, res, next) => {
    const role = req.headers.role
    if(!role) {
        return res.status(401).send("Unauthorized: No role provided.");
    }
    req.user = { role : role };
    next();
} 
module.exports = auth;

