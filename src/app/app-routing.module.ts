import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  AboutComponent,
  FrontpageComponent,
  GetStartedComponent,
  JobComponent,
  LayoutComponent,
  PricingComponent,
  RedirectComponent,
  TeamComponent,
  UsComponent,
  WhatComponent,
} from './components'
import { PageArticle, PageBlog, PageIndustry } from './pages'
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { invert: false },
    children: [{ path: '', component: FrontpageComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    data: { invert: false },
    children: [
      { path: '', component: FrontpageComponent },
      { path: 'what', component: WhatComponent },
      { path: 'signup', component: RedirectComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'getting-started', component: GetStartedComponent },
      { path: 'blog', component: PageBlog },
      { path: 'article/:handle', component: PageArticle },
      { path: 'industry/:industry', component: PageIndustry },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: 'us', component: UsComponent },
          { path: 'team', component: TeamComponent },
          { path: 'jobs', component: JobComponent },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
