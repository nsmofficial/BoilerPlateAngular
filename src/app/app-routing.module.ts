import { RouterModule, Routes } from "@angular/router";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { DashboardLayoutComponent } from "./layout/app-layout/dashboard-layout/dashboard-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { NgModule } from "@angular/core";
import { Page404Component } from "./authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "Masters/Docket/Create", pathMatch: "full" },
      {
        path: "dashboard",
        component: DashboardLayoutComponent,
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "UserMaster",
        loadChildren: () =>
          import("./Masters/masters.module").then((m) => m.MastersModule),
      },

      {
        path: "widget",
        loadChildren: () =>
          import("./widget/widget.module").then((m) => m.WidgetModule),
      },
      {
        path: "ui",
        loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
      },

      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then((m) => m.TablesModule),
      },

      {
        path: "icons",
        loadChildren: () =>
          import("./icons/icons.module").then((m) => m.IconsModule),
      },

      {
        path: "Masters",
        loadChildren: () =>
          import("./Masters/masters.module").then((m) => m.MastersModule),
      }
      ,

      {
        path: "example",
        loadChildren: () =>
          import("./example/example.module").then((m) => m.ExampleModule),
      }
    ],
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
