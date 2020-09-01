import Mali from 'mali';

import { createGRPCServices } from './grpc';

const createApp = () => {
  const app = new Mali();
  createGRPCServices(app);
  return app;
};

export { createApp };
