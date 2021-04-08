import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewPostComponent>,
    private dataService: DataStorageService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) { }


  save() {
    const newtitle = this.form.value.title;
    const newcontent = this.form.value.content;
    this.dataService.createAndStorePost(newtitle, newcontent);
    this.dataService.ShowedPostAdded.next({ title: newtitle, body: newcontent });
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }
}
