import httpStatus from "http-status";
import passport from "passport";

export const authenticateJwT = (req,res,next)=>{
    if(req.headers && !req.headers.authorization){
        throw Error('Missing Token')
    }
    return passport.authenticate('jwt',{session:false},(err,user)=>{
        if(err && !user){
            throw Error(httpStatus.UNAUTHORIZED)
        }
        req.user = user.clean();
        return next();

    })(req,res,next);
}