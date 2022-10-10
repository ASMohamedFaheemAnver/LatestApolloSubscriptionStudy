import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Message } from './common/message';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class AppResolver {
  private readonly pubSub: PubSub;

  constructor(private readonly appService: AppService) {
    this.pubSub = new PubSub();
  }

  @Query((_) => Message)
  root(): Message {
    setTimeout(() => {
      console.log({ msg: 'emitted!' });
      this.pubSub.publish('sub:requests', {
        subscribeRequests: { message: 'emitted!' },
      });
    }, 2000);
    return { message: 'server is up and running' };
  }

  @Subscription((_) => Message)
  subscribeRequests(): AsyncIterator<Message> {
    console.log({ msg: 'subscribed!' });
    return this.pubSub.asyncIterator<Message>('sub:requests');
  }
}
