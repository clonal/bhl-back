import {Category} from './category';

export class Department {
    constructor (
        public id: number,
        public name: string,
        public desc: string,
        public order: number,
        public children: Category[]
    ) {}
}
