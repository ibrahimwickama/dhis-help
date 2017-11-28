import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {IArchiveComponent} from "./pages/i-archive/i-archive.component";
import {PivotTableComponent} from "./pages/pivot-table/pivot-table.component";
import {HomeComponent} from "./pages/home/home.component";
/**
 * Created by mpande on 11/19/17.
 */


const appRoutes: Routes = [
   { path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
   { path:'iarchive', component: IArchiveComponent},
   { path: 'pivottable', component: PivotTableComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
