 
export class postData{
    inputtitle: string;
    
}
 
export class postDataUsername{
    inputusername: string;
    
}

export class postRating{
    rating : number;
    isbn : string;
}

export interface respData {
    author: string;
    average_rating : number;
  image_url :Blob;
  title: string;
  //genre : string;
  goodreads_book_id: number;
  isbn: number;

}
/**
 * @author Astha Sharma
 *
 * 
 */