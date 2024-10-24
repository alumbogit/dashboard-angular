import { Component, Input, computed, signal } from '@angular/core';
import { MenuItem } from '../../models/types models/menu.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sidenavCollapsed=signal(false);
  @Input() set collapsed(val :boolean){
    this.sidenavCollapsed.set(val)
  }

  profilePicSize=computed(()=>this.sidenavCollapsed()?'32':'100')

  menuItem=signal<MenuItem[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard'
    },
    {
      icon:'video_library',
      label:'Conent',
      route:'content',
      subItems:[
        {
          icon:'dashboard',
          label:'Dashboard',
          route:'dashboard'
        },{
          icon:'dashboard',
          label:'Dashboard',
          route:'dashboard'
        },{
          icon:'dashboard',
          label:'Dashboard',
          route:'dashboard'
        }
      ]
    },
    {
      icon:'analytics',
      label:'Analytics',
      route:'analytics'
    },
    {
      icon:'comments',
      label:'Comment',
      route:'comment'
    }
  ])
}
