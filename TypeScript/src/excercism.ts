interface GradeSchoolInterface {
  roster(): Roster;
  add(name?: string, grade?: number): void;
  grade(selectedGrade: number): String[];
}

type Roster = { [key: number]: string[] };

export class GradeSchool implements GradeSchoolInterface {
  #rosterDB: Roster;

  constructor() {
    this.#rosterDB = {};
  }

  roster(): Roster {
    const newRoster: Roster = { ...this.#rosterDB };
    for (var grade in newRoster) {
      newRoster[grade] = Object.values(newRoster[grade]).sort();
    }
    return newRoster;
  }

  add(name: string, grade: number): void {
    let indexOfLocatedName: number;
    console.log(name);
    for (var _grade in this.#rosterDB) {
      indexOfLocatedName = this.#rosterDB[_grade].indexOf(name);
      if (indexOfLocatedName === 0) {
        this.#rosterDB[_grade].splice(indexOfLocatedName, 1);
        break;
      }
    }
    console.log('ame', this.#rosterDB);
    if (this.#rosterDB.hasOwnProperty(grade)) this.#rosterDB[grade].push(name);
    else this.#rosterDB[grade] = [name];
  }

  grade(selectedGrade: number): String[] {
    const newRoster: Roster = JSON.parse(JSON.stringify(this.#rosterDB));
    return !newRoster[selectedGrade] ? [] : newRoster[selectedGrade].sort();
  }
}

const NewGrade: GradeSchool = new GradeSchool();

NewGrade.add('Peter', 3);
NewGrade.add('Mike', 2);
NewGrade.add('Grace', 1);
NewGrade.add('Grace', 2);
console.log(NewGrade.grade(1));
console.log(NewGrade.grade(5));

// NewGrade.grade(1).push('yahhhhhhh');
console.log('-------------------------');
console.log(NewGrade.roster());
