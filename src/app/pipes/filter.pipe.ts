import { Pipe, PipeTransform } from '@angular/core';
import { Complaint } from '../models/complaint.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(complaints: Complaint[], text: string = ""): Complaint[] {
    if (text.length === 0) {
      return complaints;
    }

    text = text.toLowerCase().replace(new RegExp(' ', 'g'), '');

    return complaints.filter((complaint) => {
      const shortDate = complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').substring(0, 4) + complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').substring(6);
      return (complaint.plate.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.state.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.type.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.typeID.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.stateID.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.location.address.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint._id.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.notes.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').includes(text) ||
        complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').replace(new RegExp('/', 'g'), '-').includes(text) ||
        shortDate.includes(text) ||
        shortDate.replace(new RegExp('/', 'g'), '-').includes(text)
      )
    });
  }

}
