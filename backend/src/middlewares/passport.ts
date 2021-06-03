import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import '../config/dotenv';

const secret = process.env.JWT_SECRET || 'secretJR';
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: secret,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id: payload.id } });
    //console.log(user);
    if (user) return done(null, user);
    return done(null, false, 'algo salio mal');
  } catch (error) {
    console.log(error);
  }
});
