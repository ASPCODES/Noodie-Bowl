import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { User } from "../models/user.model.js";
import { asyncHandler } from "./asyncHandler.js";

export const connectPassport = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
            },

            asyncHandler(async(accessToken, refreshToken, profile, next) => {
                try {
                    const user = await User.findOne({googleId: profile.id});

                    if (!user) {
                        const newUser = await User.create({
                            googleId: profile.id,
                            name: profile.displayName,
                            photo: profile.photos[0].value,
                            acessToken: accessToken,
                            refreshToken: refreshToken,
                        });
                        return next(null, newUser);
                    } else {
                        return next(null, user);
                    }
                } catch (error) {
                    console.error("Error in GoogleStrategy:", error);
                    return next(error, null);
                }
            })
        )
    );

    passport.serializeUser((user, next) => {
        next(null, user.id)
    });

    passport.deserializeUser(async(id, next) => {
        try {
            const user = await User.findById(id);
            next(null, user);

        } catch (error) {
            next(error, null);
        }
    });
};