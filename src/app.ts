import path from 'path';
import Mali from 'mali';

import { HelloRequest, HelloResponse } from './protoTypes/greeter.protoType';
import { Context } from './components';

function sayHello(ctx: Context<HelloRequest, HelloResponse>) {
  ctx.res = { message: 'Hello '.concat(ctx.req.name) };
}

const createApp = () => {
  const PROTO_PATH = path.resolve(__dirname, './proto/greeter.proto');
  const app = new Mali(PROTO_PATH);
  app.use({ sayHello });
  return app;
};

export { createApp };
