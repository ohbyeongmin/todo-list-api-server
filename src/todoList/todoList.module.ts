import { Module } from '@nestjs/common';
import { TodoListController } from './todoList.controller';

@Module({
  controllers: [TodoListController],
  providers: [],
})
export class TodoListModule {}
