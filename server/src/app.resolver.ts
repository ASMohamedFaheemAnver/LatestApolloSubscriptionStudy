import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Message } from './common/message';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query((_) => Message)
  root(): Message {
    return { message: 'server is up and running' };
  }
}
