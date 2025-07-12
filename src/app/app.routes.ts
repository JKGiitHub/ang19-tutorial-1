import { Routes } from '@angular/router';
import { HomepageComponent } from './tut1/homepage/homepage.component';
import { Les1Component } from './tut1/les1/les1.component';
import { Les3Component } from './tut1/les3/les3.component';
import { Les4Component } from './tut1/les4/les4.component';
import { Les5Component } from './tut1/les5/les5.component';
import { Les6Component } from './tut1/les6/les6.component';
import { Les7Component } from './tut1/les7/les7.component';
import { Les8parentComponent } from './tut1/les8/les8parent/les8parent.component';
import { Les9parentComponent } from './tut1/les9/les9parent/les9parent.component';
import { Les10parentComponent } from './tut1/les10/les10parent/les10parent.component';
import { Les11Component } from './tut1/les11/les11.component';
import { Les14Component } from './tut1/les14/les14.component';
import { Les15Component } from './tut1/les15/les15.component';
import { Les16Component } from './tut1/les16/les16.component';
import { Les17Component } from './tut1/les17/les17.component';
import { Les18Component } from './tut1/les18/les18.component';
import { Les19Component } from './tut1/les19/les19.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home Page',
    },
    {
        path: 'les1',
        component: Les1Component,
        title: 'Lesson 2',
    },
    {
        path: 'les3',
        component: Les3Component,
        title: 'Lesson 3',
    },
    {
        path: 'les4',
        component: Les4Component,
        title: 'Lesson 4',
    },
    {
        path: 'les5',
        component: Les5Component,
        title: 'Lesson 5',
    },
    {
        path: 'les6',
        component: Les6Component,
        title: 'Lesson 6',
    },
    {
        path: 'les7',
        component: Les7Component,
        title: 'Lesson 7',
    },
    {
        path: 'les8',
        component: Les8parentComponent,
        title: 'Lesson 8',
    },
    {
        path: 'les9',
        component: Les9parentComponent,
        title: 'Lesson 10',
    },
    {
        path: 'les10',
        component: Les10parentComponent,
        title: 'Lesson 10',
    },
    {
        path: 'les11',
        component: Les11Component,
        title: 'Lesson 11',
    },
    {
        path: 'les14',
        component: Les14Component,
        title: 'Lesson 14',
    },
    {
        path: 'les15',
        component: Les15Component,
        title: 'Lesson 15',
    },
    {
        path: 'les16',
        component: Les16Component,
        title: 'Lesson 16',
    },
    {
        path: 'les17',
        component: Les17Component,
        title: 'Lesson 17',
    },
    {
        path: 'les18',
        component: Les18Component,
        title: 'Lesson 18',
    },
    {
        path: 'les19',
        component: Les19Component,
        title: 'Lesson 19',
    },
];
