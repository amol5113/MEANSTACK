import { Component } from '@angular/core';

import Post from './post.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'star-book';
  public comment="";
  public post: Post;
  public postList: Post[];
  public constructor(private sanitizer: DomSanitizer) {
    this.post = new Post();
    this.comment="";
    this.postList = [];
  }
  
  public likeCount(item: Post) {
    item.likeCount += 1;
  }
  public commentCount(item: Post) {
    item.commentCount += 1;
  }
  public subsCount(item: Post) {
    item.subscribeCount += 1;
  }
  public deletePost(itemIndex) {
    //splice(delete element index , number of element to be delete)
    this.postList.splice(itemIndex, 1);
  }

  /**post text */
  public postText() {
    /**this represents every newly created object */
    //PUSH method is to append the element 
    //this.postList.push(this.post);

    //SPLICE method (WE CAN ADD ELEMENT ANY WHERE) splice(whr u want to add,u want to delete,what you want to add)

    this.postList.splice(0, 0, this.post);

    /**re initialize */
    this.post = new Post();

  }
  public addComment(item:Post){
    
    item.commentList.push(this.comment);
    alert(this.comment);
    this.postList.splice(0, 0, this.post);
    this.comment="";

    this.post=new Post();
  }
  public getcmt(item:Post){
    alert(item.commentList);
  }
  /**post IMAGE method */
  public postImage(event) {
    //event is the way to access the element in the angular

    //IT WILL GIVE THE ACCESS TO THE INPUT ELEMENT
    let refElement = event.target;

    //access the 1 file
    let uploadedFile = refElement.files[0];

    //convert file into URL
    let uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    let uploadedFileAsUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'IMAGE';
    this.post.postValue = uploadedFileAsUrl1;

    //add this image to the post list
    this.postList.splice(0, 0, this.post);

    //re initialize
    this.post = new Post();

  }
    /**upload video */
  public postVideo(event) {
    //event is the way to access the element in the angular

    //IT WILL GIVE THE ACCESS TO THE INPUT ELEMENT
    let refElement = event.target;

    //access the 1 file
    let uploadedFile = refElement.files[0];

    //convert file into URL
    let  uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    let uploadedFileAsUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'VIDEO';
    this.post.postValue = uploadedFileAsUrl1;

    //add this image to the post list
    this.postList.splice(0, 0, this.post);

    //re initialize
    this.post = new Post();

  }
}
