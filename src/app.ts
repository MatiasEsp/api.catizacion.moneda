import express, { Application } from 'express';
import { Server } from 'http';

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public init(): void {

  }

  startServer(port: number): Server {
    return this.app.listen(port, () => {
      console.log(`app server running on port ${port}...`);
      this.init();
    });
  }
}
