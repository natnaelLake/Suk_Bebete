import passportLocal from "passport-local";

import Admin from "../../models/users/Admin/index.js";

const localStrategy = new passportLocal.Strategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
        try {
            Admin.findOne({ email }).then((err, user) => {
                
                if (err) {
                    console.log('dfafjhkaf jkashfd safkjhfads kjh error',user)
                    return done(err);
                }
                if (!user) {
                    console.log('dfafjhkaf jkashfd safkjhfads kjh not found',user)
                    
                    return done(null, false);
                }
                // else{
                    console.log('dfafjhkaf jkashfd safkjhfads kjh  fine',user)
                    return done(null, user);
                // }
                // console.log('dfafjhkaf jkashfd safkjhfads kjh error 0',admin)
      });
    } catch (error) {
        console.log(error)
        
    }
  }
);

export default localStrategy;