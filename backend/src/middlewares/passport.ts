import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: process.env.JWT_SECRET,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id: payload.id } });
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});
