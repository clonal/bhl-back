export class Column {
  id: number;
  name: string;
  parent: number;
  banner: string[];
  desc: string;
  content: string;
  order: number;
  children: Column[];
  constructor(id: number, name: string, parent: number,
              banner: string[], desc: string, content: string,
              order: number, children: Column[]) {
    this.id = id;
    this.name = name;
    this.parent = parent;
    this.banner = banner;
    this.desc = desc;
    this.content = content;
    this.order = order;
    this.children = children;
  }
}
