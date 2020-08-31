import path from 'path';
import Mali from 'mali';
import { diana } from 'diana-js';
import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition } from 'grpc';

import { HelloRequest, HelloResponse } from './protoTypes/greeter.protoType';
import { ReadRequest, ReadResponse } from './protoTypes/cat.protoType';
import { Context } from './components';

function sayHello(ctx: Context<HelloRequest, HelloResponse>) {
  ctx.res = { message: 'Hello '.concat(ctx.req.name) };
}

function read(ctx: Context<ReadRequest, ReadResponse>) {
  ctx.res = {
    cat: {
      id: diana(),
      name: 'Thanh beo beo',
      color: 'white',
    },
  };
}

const createApp = () => {
  const PROTO_PATH = path.resolve(__dirname, './proto/greeter.proto');
  const protoDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const packageDefinition = loadPackageDefinition(protoDefinition) as any;

  const PROTO_PATH_2 = path.resolve(__dirname, './proto/cat.proto');
  const protoDefinition2 = loadSync(PROTO_PATH_2, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const packageDefinition2 = loadPackageDefinition(protoDefinition2) as any;

  const app = new Mali();

  app.addService(packageDefinition.Greeter.service, 'Greeter');
  app.addService(packageDefinition2.CatService.service, 'CatService');
  app.use({
    Greeter: {
      sayHello,
    },
  });
  app.use({
    CatService: {
      read,
    },
  });
  return app;
};

export { createApp };
