import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/post-list/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent,
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostListComponent,
        children: [
            { path: ':id', component: PostDetailComponent, pathMatch: 'full', }
        ]
    },
    {
        path: 'auth',
        // loadChildren: './auth/auth.module#AuthModule'
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: '',
    //     pathMatch: 'full',
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }