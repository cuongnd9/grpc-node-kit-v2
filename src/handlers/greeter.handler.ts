import { Context } from '../components';
import { HelloRequest, HelloResponse } from '../protoTypes/greeter.protoType';

class GreeterHandler {
  static sayHello = (ctx: Context<HelloRequest, HelloResponse>) => {
    ctx.res = { message: 'Hello '.concat(ctx.req.name) };
  };
}

export { GreeterHandler };
