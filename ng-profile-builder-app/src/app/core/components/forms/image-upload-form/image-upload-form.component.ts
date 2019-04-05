import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pba-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.scss']
})
export class ImageUploadFormComponent implements OnInit {
  @Input() imageSrc: string;
  @Output() imageChanged = new EventEmitter();
  dragging: boolean = false;
  dropped: boolean = false;
  isError: boolean = false;
  errorMsg: string;
  MAX_IMAGE_SIZE = (1024*300);  // 300kb
  constructor() { }

  ngOnInit() {
  }

  public handleDragEnter(event: any) {
    console.log('dragging');
    this.dragging = true;
    this.dropped = false;
  }

  public handleDragLeave(event: any) {
    console.log('dragging left');
    this.dragging = false;
  }

  public handleDrop(event: any) {
    console.log('dropped');
    event.preventDefault();
    this.handleChange(event);
  }

  public handleChange(event: any) {
    this.isError = false;
    const eventSrcObject = event.dataTransfer ? event.dataTransfer : event.target;
    if (!eventSrcObject.files || !eventSrcObject.files.length ) {
      this.dropped = true;
      this.dragging = false;
      this.toggleError(true, 'Invalid File or File Format');
      return;
    }
    const file = eventSrcObject.files[0];
    const pattern = /image-*/;
    const reader: FileReader = new FileReader();

    if (!file.type.match(pattern)) {
      this.toggleError(true, 'Invalid File Format');
      return;
    }

    reader.onload = (e) => {
      this.imageSrc = e.target.result;
      this.dropped = true;
      this.dragging = false;
      this.isError = false;
      if (this.imageSrc.length > this.MAX_IMAGE_SIZE) {
        console.log(this.imageSrc.length/1024, 'kb');
        this.toggleError(true, `Image exceeds Size of ${this.MAX_IMAGE_SIZE/1024} kb`);
        setTimeout(() => this.imageSrc = '', 2000);
        return;
      }
      this.imageChanged.emit(this.imageSrc);
    }

    reader.readAsDataURL(file);
  }

  public clear(event: any) {
    event.preventDefault();
    this.imageSrc = '';
    this.isError = false;
    this.imageChanged.emit(this.imageSrc);
  }

  toggleError(show: boolean, msg: string) {
    this.isError = show;
    this.errorMsg = msg;
  }
}
