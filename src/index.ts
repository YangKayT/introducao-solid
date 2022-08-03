import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../swagger.json';
import { usersRoutes } from './routes/users.routes';
// eslint-disable-next-line import/no-unresolved

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use('/users', usersRoutes);

export { app };
