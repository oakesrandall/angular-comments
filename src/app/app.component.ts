import { Component } from '@angular/core';

class quote {
    commentText: string;
    author: string;
    showEdit: boolean = false;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    updateCommentText;
    updateAuthor;
    commentText;
    author;
    newQuote: quote;
    
    constructor(){
        this.newQuote = new quote(); 
    };

    comments = [{
          showEdit: false,
          commentText: 'first comment!',
          author: 'Joe',
      }, {
          showEdit: false,
          commentText: 'nice work!',
          author: 'Frank',  
      }, {
          showEdit: false,
          commentText: 'I would also like to congratulate you!',
          author: 'Mary',       
    }];

  addComment() {
      this.newQuote.commentText = this.commentText;
      this.newQuote.author = this.author;
      this.newQuote.showEdit = false;
      this.comments.push(this.newQuote);
      console.log(this.comments);
  }

  deleteComment(index) {
      console.log(index);
      this.comments.splice(index, 1);
  }

  showUpdate(index) {
      this.comments[index].showEdit = true;
      console.log('running showEdit, it is now ' + this.comments[index].showEdit);
  }

  updateComment(index) {
          this.comments[index].commentText = this.updateCommentText;
          this.comments[index].author = this.updateAuthor;
          this.comments[index].showEdit = false;
          console.log(this.comments);
  }
}



