export class WordSearch {
    constructor(grid) {
        this.grid = grid.map((item) => [item]);
    }
    find(words) { }
}
const myWordSearch = new WordSearch(["jefblpepre", "camdcimgtc"]);
console.log(myWordSearch.grid);
