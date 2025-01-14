import Movie from './movie';

const MOVIES: Movie[] = [
    {
        id: 1,
        name: 'The Shawshank Redemption',
        author: 'Frank Darabont',
        rating: 4.3,
        releaseDate: '1994',
        duration: 142,
        synopsis: "Two imprisoned...",
        casting: []
    },
    {
        id: 2,
        name: 'The Godfather',
        author: 'Francis Ford Coppola',
        rating: 4.5,
        releaseDate: '1972',
        duration: 175,
        synopsis: "The aging patriarch...",
        casting: []
    },
    {
        id: 3,
        name: 'The Dark Knight',
        author: 'Christopher Nolan',
        rating: 4.4,
        releaseDate: '2008',
        duration: 152,
        synopsis: "When the menace...",
        casting: []
    },
];

export default MOVIES;