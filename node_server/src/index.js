require('dotenv').config();
const express = require('express');
const { Router } = require('express');
const { getDataSource } = require('./db');
const services = require('./services');
const controllers = require('./controllers');
const routers = require('./routes');

const PORT = process.env.PORT;

async function initApp() {
  // Init express app
  const app = express();

  // DB config
  const dataSource = await getDataSource();
  if (!dataSource) {
    return;
  }

  // Global Middlewares
  app.use(express.json());

  // Services
  const userService = services.getUserService(dataSource);

  // Controllers
  const userController = controllers.getUserController(userService);

  // Routers
  const apiRouter = Router();
  const userRouter = routers.getUserRouter(userController);
  app.use('/api', apiRouter);
  apiRouter.use('/users', userRouter);

  // Check health
  app.get('/health', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}

initApp();
