import { CadastrarTarefaComponent } from './cadastrar';
import { Routes, RouterModule } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefaComponent
	}
];

