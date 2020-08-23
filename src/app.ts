import path from 'path';
import Mali, { Context } from 'mali';
import { logger } from 'juno-js';

import { config } from './components';

function sayHello(ctx: Context) {
  ctx.res = { message: 'Hello '.concat(ctx.req.name) };
}

const createApp = () => {
  const { port } = config;
  const PROTO_PATH = path.resolve(__dirname, './protos/greeter.proto');
  const app = new Mali(PROTO_PATH);
  app.use({ sayHello });
  app.start(`0.0.0.0:${port}`);
  logger.info(`🚀 Server ready at http://0.0.0.1:${port}`);
};

export { createApp };
