import jwt from "jsonwebtoken";

export const auth = function (req, res, next) {
    // get token fro, header
    const token = req.header("x-auth-token");

    console.log(token, "oooo")
    // check if not token
    if(!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    };

    try {
        const decoded = jwt.verify( token, process.env.JWT_SECRET);
        
        req.user = decoded.user;
        console.log(req.user, decoded.user)
        next();

    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    };
};
