export class Task {
  id: number;

  name: string;

  username: string;

  title: string;

  value: number;

  date: string;

  image: string;

  isPayed: boolean;

  constructor({ id, name, username, title, value, date, image, isPayed }: Task) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.title = title;
    this.value = value;
    this.date = date;
    this.image = image;
    this.isPayed = isPayed;
  }
}
