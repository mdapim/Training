interface WordSearchInterface {
  grid: string[][];
}

export class WordSearch {
  grid: string[][];
  constructor(grid: string[]) {
    this.grid = grid.map((item) => [item]);
  }

  public find(words: string[]) {}
}

const myWordSearch = new WordSearch(["jefblpepre", "camdcimgtc"]);

console.log(myWordSearch.grid);
