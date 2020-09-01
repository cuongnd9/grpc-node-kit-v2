import { credentials } from 'grpc';

import { loadProtoPackageDefinition } from '../components';
import { HelloRequest, HelloResponse } from '../protoTypes/greeter.protoType';

const { Greeter } = loadProtoPackageDefinition('./proto/greeter.proto');
const client = new Greeter('0.0.0.0:50000', credentials.createInsecure());

class GreeterClient {
  static sayHello = (name: string) => {
    const request: HelloRequest = { name };
    client.sayHello(request, (error: Error, response: HelloResponse) => {
      console.log('Greeting:', response.message);
    });
  }
}

export { GreeterClient };
