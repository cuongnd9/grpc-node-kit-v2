import path from 'path';
import Mali, { Context } from 'mali';

function sayHello(ctx: Context) {
  ctx.res = { message: 'Hello '.concat(ctx.req.name) };
}

const createApp = () => {
  const PROTO_PATH = path.resolve(__dirname, './proto/greeter.proto');
  const app = new Mali(PROTO_PATH);
  app.use({ sayHello });
  return app;
};

export { createApp };
