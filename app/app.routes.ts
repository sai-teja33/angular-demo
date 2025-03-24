import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StructuralDirectivesComponent } from './tasks/structural-directives/structural-directives.component';
import { AlertComponent } from './alert/alert.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { viewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'structuraldir',
        component:StructuralDirectivesComponent
    },
    {
        path:'ip-op',
        component:AlertComponent
    },
    {
        path:'parent',
        component:ParentComponent,
        children:[
            {
                path:'child1',
                component:Child1Component
            },
            {
                path:'child2',
                component:Child2Component
            }
        ]

    },
    {
        path:'child',
        component:ChildComponent
    },
    {
        path:'viewchild',
        component:ViewchildComponent
    }
];
