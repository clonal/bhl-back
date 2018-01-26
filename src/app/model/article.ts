
export class Article {
    id: number;
    column: number;
    title: string;
    desc: string;
    content: string;
    order: number;
    date: string;


    constructor(id: number, column: number, title: string, desc: string,
                content: string, order: number, date: string) {
        this.id = id;
        this.column = column;
        this.title = title;
        this.desc = desc;
        this.content = content;
        this.order = order;
        this.date = date;
    }
}
