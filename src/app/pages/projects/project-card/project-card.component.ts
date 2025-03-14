import { Component, Input } from '@angular/core';
import { project } from '../../../model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  selectedStatus:string = 'All';
 minTeamSize:number = 0;
 maxTeamSize:number = 100;
 @Input() project:project={id:'',name:'',description:'',status:'', startDate:'',endDate:'',teamSize:0,image:''}
}
