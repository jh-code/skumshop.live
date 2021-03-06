import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum.routing';

@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
