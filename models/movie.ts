export default class Movie {
    id: number;
    name: string;
    author: string;
    rating: number;
    releaseDate: string;
    duration: number;
    synopsis: string;
    casting: [];


    constructor(
        id: number,
        name: string,
        author: string,
        rating: number,
        releaseDate: string,
        duration: number,
        synopsis: string,
        casting: []
    ) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.rating = rating;
        this.releaseDate = releaseDate;
        this.duration = duration;
        this.synopsis = synopsis;
        this.casting = casting;
    }

}