import { IUser } from "./../models/User";
import User from "../models/User";

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractedJWT = require("passport-jwt").ExtractJwt;
import config from "config";

//constants of JWTstrategy
const options = {
  jwtFromRequest: ExtractedJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get("jwtSecret"),
};

const strategy = new JWTstrategy(options, (payload: IUser, done: any) => {
  return User.findById(payload._id)
    .then((user) => {
      return user ? done(null, user) : done(null, false);
    })
    .catch((error) => done(error));
});

const JWTStategy = (passport: any) => {
  passport.use(strategy);
};

export { JWTStategy };
