import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import { connectDB } from './config';
import 'reflect-metadata';
// routes
import apiRoutes from './routes/';

// initializations
const app: Express = express();

// settings
app.set('port', process.env.PORT || 4000);
// Connect database
connectDB();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al proyecto de Ingenieria de software!' });
});

// api routes
app.use('/api', apiRoutes);

export default app;
