import express, { Application } from 'express';
import { Server } from 'http';
import apisRoutesLoader from './common/apisRoutesLoader';

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public init(): void {
    apisRoutesLoader(this.app);
  }

  startServer(port: number): Server {
    return this.app.listen(port, () => {
      console.log(`app server running on port ${port}...`);
      this.init();
    });
  }
}
