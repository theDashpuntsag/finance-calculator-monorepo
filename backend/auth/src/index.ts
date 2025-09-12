import express from 'express';
import helmet from 'helmet';
import http from 'http';
import 'reflect-metadata';
import routes from './routes/index';
import logger from './utils/winston';

const APPLICATION_PORT = Number(process.env.APPLICATION_PORT) | 8000;

/**
 * Initialize Express Application
 *
 * @param appName - Name of the application
 */
async function initializeExpressApp(appName: string): Promise<void> {
  logger.info(`Initializing application ${appName}...`);
  const expressApp = express();
  expressApp.use(helmet());
  expressApp.use(express.static('./public'));
  expressApp.use(express.json());

  // Register application routes
  expressApp.use(routes);

  const server = http.createServer(expressApp);
  server.listen(Number(APPLICATION_PORT), () => {
    logger.info('-------------------------------------------------------------------------------');
    logger.info(`   Application:         ${appName}`);
    logger.info(`   Local:               http://localhost:${APPLICATION_PORT}`);
    logger.info(`   External:            http://localhost:${APPLICATION_PORT}`);
    logger.info('   Environments(env):   ' + process.env.NODE_ENV);
    logger.info('-------------------------------------------------------------------------------');
  });
}

/**
 *  Initialize Database Connection
 *
 * @param appName - Name of the application
 */
async function initializeDatabaseConnection(appName: string): Promise<void> {
  logger.info(`Initializing database connection for ${appName}...`);
}

async function setupScheduledTasks(appName: string): Promise<void> {
  logger.info(`Setting up scheduled tasks for ${appName}...`);
}

async function initializeApplication(appName: string): Promise<void> {
  await initializeExpressApp(appName);
  await initializeDatabaseConnection(appName);
  await setupScheduledTasks(appName);
}

async function main() {
  try {
    logger.info('======================== APPLICATION is STARTING =============================');
    const appName = 'Finance-Calculator';
    await initializeApplication(appName);
    logger.info('==================== APPLICATION started SUCCESSFULLY ========================');
  } catch (error: unknown) {
    logger.error(`Failed to start the application: ${(error as Error).message}`);
  }
}

main();
