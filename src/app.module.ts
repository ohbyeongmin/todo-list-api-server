import { Module } from '@nestjs/common';
import { TodoListModule } from './todoList/todoList.module';

@Module({
  imports: [TodoListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
