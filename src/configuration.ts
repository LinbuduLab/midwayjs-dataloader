import { Configuration, App } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { IMidwayKoaApplication } from '@midwayjs/koa';
import { mockService } from './utils/mock';

@Configuration()
export class ContainerConfiguration implements ILifeCycle {
  @App()
  app: IMidwayKoaApplication;

  async onReady() {
    this.app.use(await this.app.generateMiddleware('GraphQLMiddleware'));
  }
}
