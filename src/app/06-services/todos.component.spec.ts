import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

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
});
