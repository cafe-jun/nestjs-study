import * as express from 'express';
import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { UserController } from './controller/user.controller';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

export class Server {
    private app: express.Application;
    private PORT: number = parseInt(process.env.PORT) || 3000;
    private server: InversifyExpressServer;
    private container: Container;
    constructor() {
        this.container = new Container();
        this.container.bind(TYPE.Controller).to(UserController);
        this.server = new InversifyExpressServer(this.container);
        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
            app.use(cookieParser);
        });
        this.app = this.server.build();
        this.app.listen(this.PORT, () => {
            console.log(`Listening at localhost port ${this.PORT}`);
        });
    }
    public static bootstrap(): Server {
        return new Server();
    }
}
// 서버 시작
Server.bootstrap();
