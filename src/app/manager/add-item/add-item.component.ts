import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LibraryItemService } from 'src/app/services/library-item.service';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Dvd } from 'src/app/models/dvd.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  maxDate = new Date();

  languagesList: string[] = ['English', 'Sinhala', 'Tamil', 'French', 'Spanish', 'Hindi'];

  constructor(private libItemService: LibraryItemService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.addItemForm = new FormGroup({
      'itemType': new FormControl('book'),
      'commonInfo': new FormGroup({
        'isbn': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
        'title': new FormControl(null, [Validators.required]),
        'sector': new FormControl(null, [Validators.required]),
        'publicationDate': new FormControl(null, [Validators.required])
      }),
      'bookInfo': new FormGroup({
        'publisher': new FormControl(null, [Validators.required]),
        'noOfPages': new FormControl(null, [Validators.required]),
        'authors': new FormArray([new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)])])
      }),
      'dvdInfo': new FormGroup({
        'languages': new FormControl(null, [Validators.required]),
        'subtitles': new FormControl(null, [Validators.required]),
        'producer': new FormControl(null, [Validators.required]),
        'actors': new FormArray([new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)])])
      })
    });
  }

  //Add and remove authors and actors
  addNewAuthor() {
    const authorControl = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]);
    (<FormArray>this.addItemForm.get('bookInfo.authors')).push(authorControl);
  }

  addNewActor() {
    const actorControl = new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]);
    (<FormArray>this.addItemForm.get('dvdInfo.actors')).push(actorControl);
  }

  removeAuthor() {
    (<FormArray>this.addItemForm.get('bookInfo.authors'))
    .removeAt((<FormArray>this.addItemForm.get('bookInfo.authors')).length-1);
  }

  removeActor() {
    (<FormArray>this.addItemForm.get('dvdInfo.actors'))
    .removeAt((<FormArray>this.addItemForm.get('dvdInfo.actors')).length-1);
  }

  //Add item button is clicked
  onSubmit() {
    let isbn = this.addItemForm.get('commonInfo.isbn').valid;
    let title = this.addItemForm.get('commonInfo.title').valid;
    let sector = this.addItemForm.get('commonInfo.sector').valid;
    let publicationDate = this.addItemForm.get('commonInfo.publicationDate').valid;

    let isbnVal = this.addItemForm.get('commonInfo.isbn').value;
    let titleVal = this.addItemForm.get('commonInfo.title').value;
    let sectorVal = this.addItemForm.get('commonInfo.sector').value;
    let publicationDateVal = this.addItemForm.get('commonInfo.publicationDate').value;
    
    if(this.addItemForm.get('itemType').value == 'book'){
      this.addItemForm.get('dvdInfo').reset();
      let publisher = this.addItemForm.get('bookInfo.publisher').valid;
      let noOfPages = this.addItemForm.get('bookInfo.noOfPages').valid;
      let authors = this.addItemForm.get('bookInfo.authors').valid;
      if(isbn && title && sector && publicationDate && publisher && noOfPages && authors){

        let publisherVal = this.addItemForm.get('bookInfo.publisher').value;
        let noOfPagesVal = this.addItemForm.get('bookInfo.noOfPages').value;
        let authorsVal = this.addItemForm.get('bookInfo.authors').value;
        let book = new Book(isbnVal, titleVal, sectorVal, publicationDateVal, "available", null, publisherVal, authorsVal, noOfPagesVal);
        this.libItemService.addBook(book)
          .subscribe(
            (response: any) => {
              console.log(response);
              if(response == "invalid") {
                this.snackBar.open('ISBN already exists!', 'Undo', {
                  duration: 3000
                });
              }else if(response == "max reached") {
                this.snackBar.open('Only 100 books allowed!', 'Undo', {
                  duration: 3000
                });
              }else{
                console.log("Book saved in database!");
                this.router.navigate(['/manager/books']);
              }
            }
          );
      }
    }else if(this.addItemForm.get('itemType').value == 'dvd'){
      this.addItemForm.get('bookInfo').reset();
      let languages = this.addItemForm.get('dvdInfo.languages').valid;
      let subtitles = this.addItemForm.get('dvdInfo.subtitles').valid;
      let producer = this.addItemForm.get('dvdInfo.producer').valid;
      let actors = this.addItemForm.get('dvdInfo.actors').valid;
      if(isbn && title && sector && publicationDate && languages && subtitles && producer && actors){

        let languagesVal = this.addItemForm.get('dvdInfo.languages').value;
        let subtitlesVal = this.addItemForm.get('dvdInfo.subtitles').value;
        let producerVal = this.addItemForm.get('dvdInfo.producer').value;
        let actorsVal = this.addItemForm.get('dvdInfo.actors').value;
        let dvd = new Dvd(isbnVal, titleVal, sectorVal, publicationDateVal, "available", null, languagesVal, subtitlesVal,
        producerVal, actorsVal);
        this.libItemService.addDvd(dvd)
          .subscribe(
            (response: any) => {
              console.log(response);
              if(response == "invalid") {
                this.snackBar.open('ISBN already exists!', 'Undo', {
                  duration: 3000
                });
              }else if(response == "max reached") {
                this.snackBar.open('only 50 books allowed!', 'Undo', {
                  duration: 3000
                });
              }else{
                console.log("Dvd saved in database!");
                this.router.navigate(['/manager/dvds']);
              }
            }
          );
      }
    }
    console.log(this.addItemForm);
  }

}
