var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GradeSchool_rosterDB;
export class GradeSchool {
    constructor() {
        _GradeSchool_rosterDB.set(this, void 0);
        __classPrivateFieldSet(this, _GradeSchool_rosterDB, {}, "f");
    }
    roster() {
        const newRoster = Object.assign({}, __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f"));
        for (var grade in newRoster) {
            newRoster[grade] = Object.values(newRoster[grade]).sort();
        }
        return newRoster;
    }
    add(name, grade) {
        let indexOfLocatedName;
        console.log(name);
        for (var _grade in __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")) {
            indexOfLocatedName = __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")[_grade].indexOf(name);
            if (indexOfLocatedName === 0) {
                __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")[_grade].splice(indexOfLocatedName, 1);
                break;
            }
        }
        console.log('ame', __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f"));
        if (__classPrivateFieldGet(this, _GradeSchool_rosterDB, "f").hasOwnProperty(grade))
            __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")[grade].push(name);
        else
            __classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")[grade] = [name];
    }
    grade(selectedGrade) {
        const newRoster = JSON.parse(JSON.stringify(__classPrivateFieldGet(this, _GradeSchool_rosterDB, "f")));
        return !newRoster[selectedGrade] ? [] : newRoster[selectedGrade].sort();
    }
}
_GradeSchool_rosterDB = new WeakMap();
const NewGrade = new GradeSchool();
NewGrade.add('Peter', 3);
NewGrade.add('Mike', 2);
NewGrade.add('Grace', 1);
NewGrade.add('Grace', 2);
console.log(NewGrade.grade(1));
console.log(NewGrade.grade(5));
// NewGrade.grade(1).push('yahhhhhhh');
console.log('-------------------------');
console.log(NewGrade.roster());
