import * as randomWords from "random-words";
import * as moment from "moment";

export class PaymentModel {
    date: string;
    id: number;
    image: string;
    isPayed: boolean;
    name: string;
    title: string;
    username: string;
    value: number;

    constructor(){
        this.image = `https://robohash.org/image_${randomWords()}.png?size=150x150&set=set1`;
        this.isPayed = false;
    }
}