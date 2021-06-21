import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './sharedFolder/not-found/not-found.component';
import { StudentManagementComponent } from './student-management/student-management.component';

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: 'full' },
  { path: 'students', component: StudentManagementComponent },
  {path: '404', component:NotFoundComponent},
  {path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
