import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, throwError } from 'rxjs';

describe('TodoComponent', () => {
    let service: TodoService;
    let component: TodosComponent;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should set todos property with the items returned from the server', () => {
        const todos = [1, 2, 3];
        spyOn(service, 'getTodos').and.callFake(() => {
            return from([todos]);
        });

        component.ngOnInit();

        expect(component.todos).toBe(todos);
    });

    it('should call the server to save the changes when a new todo item is added', () => {
        const spy = spyOn(service, 'add').and.returnValue(from([]));

        component.add();

        expect(spy).toHaveBeenCalled();
    });

    it('should add the new todo returned from the server', () => {
        const todo = { id: 1 };
        spyOn(service, 'add').and.returnValue(from([todo]));

        component.add();

        expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });

    it('should set the message property if server returns an error when adding a new todo', () => {
        const error = 'error from the server';
        spyOn(service, 'add').and.returnValue(throwError(error));

        component.add();

        expect(component.message).toBe(error);
    });
});
