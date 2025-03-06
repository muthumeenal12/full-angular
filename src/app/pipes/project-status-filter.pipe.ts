import { Pipe, PipeTransform } from '@angular/core';
import { project } from '../model/project';

@Pipe({
  name: 'projectStatusFilter'
})
export class ProjectStatusFilterPipe implements PipeTransform {

  transform(projects:project[], selectedStatus:string): project[] {
    if(! projects) return [];
    if(!selectedStatus || selectedStatus=='All') return projects;
    return projects.filter(project=>project.status===selectedStatus);
  }

}
