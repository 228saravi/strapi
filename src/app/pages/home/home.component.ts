import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Book }  from '../../service/book'

@Component({
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit {
    Books: Book[];
    constructor(private booksService: BooksService) {

    }
    ngOnInit(){
        console.log('sssssssssss')
        this.booksService.getBoks().subscribe(response=>{
            console.log(response);
            this.Books=response;
        })
    }

}
