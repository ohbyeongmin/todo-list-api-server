import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOprions } from 'grpc-todo.options';

interface TodoList {
  addTodoList(data: { nickName: string; toDo: string }): Observable<any>;
}

@Controller('add')
export class TodoListController implements OnModuleInit {
  @Client(grpcClientOprions) private readonly client: ClientGrpc;
  private todoService: TodoList;

  onModuleInit() {
    this.todoService = this.client.getService<TodoList>('TodoList');
  }

  @Get()
  call(): Observable<any> {
    return this.todoService.addTodoList({ nickName: 'nest', toDo: 'success' });
  }
}
