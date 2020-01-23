import { Component, OnInit, OnChanges } from '@angular/core';
import { ServletService } from '../servlet.service';
import {MatDialog} from '@angular/material';
import { EditDriveComponent } from '../edit-drive/edit-drive.component';


@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {


  viewDrives:any[];
  constructor(private _v:ServletService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.reload(); 
  }




  reload(){
    this.viewDrives=null;
    this._v.viewData().subscribe((d:any)=>{this.viewDrives=d});
  }

  deleteData(cid)
  {
   this._v.deleteData(cid).subscribe();
   //alert("Deleted Successfully.");
   this.reload();

  }
  editDialog(cid)
  {
   const dilogref=this.dialog.open(EditDriveComponent,{data:{id:cid}});
      dilogref.afterClosed().subscribe((d:any)=>{this.reload()});

  }
    

}
