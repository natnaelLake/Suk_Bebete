import {Strategy as JwtStrategy} from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import Admin from '../../models/users/Admin/index.js';
import dotenv from 'dotenv'
import { authenticateAdmin } from '../../models/users/Admin/methods.js';
dotenv.config();
const secret = process.env.JWT_SECRET_KEY
const opts = {
    jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secret
}

const strategy = new JwtStrategy(opts,(payload,done)=>{
    console.log('payload',payload);
    Admin.findOne({_id:payload.sub}).then((err,user)=>{
        if (err) {
            return done(err, false);
        }
        if (user) {
            const token = authenticateAdmin(user._id);
            return done(null, user,token);
        } else {
            console.log(user)
            return done(null, false);
        }
    })
})



export default strategy;
