import { Category } from './category'

export class Content {    
    id: number;
    content: String;
    categories_id: number;
    is_approved: String;
    picture_location: String;
    category: Category;
    createdAt:Date;
    updatedAt:Date;    
}
