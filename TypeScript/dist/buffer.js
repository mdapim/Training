export default class CircularBuffer {
    constructor(initial) {
        this.currentIndex = 0;
        this.lastIndex = 0;
        this.initialValue = initial;
        this.bufferArr = new Array(initial);
    }
    write(value) {
        if (this.bufferArr[this.currentIndex] === undefined &&
            this.currentIndex <= this.initialValue - 1) {
            this.bufferArr[this.currentIndex] = value;
            this.currentIndex += 1;
            if (this.currentIndex > this.initialValue - 1)
                this.currentIndex = 0;
        }
        else
            throw new BufferFullError("error adding new value");
    }
    read() {
        this.checkForLoop();
        if (this.bufferArr[this.lastIndex] === undefined) {
            throw new BufferEmptyError("error reading buffer");
        }
        else {
            const value = this.bufferArr[this.lastIndex];
            this.bufferArr[this.lastIndex] = undefined;
            this.lastIndex += 1;
            this.checkForLoop();
            return value;
        }
    }
    forceWrite(value) {
        this.checkForLoop();
        try {
            this.write(value);
        }
        catch (error) {
            this.bufferArr[this.lastIndex] = value;
            this.lastIndex += 1;
        }
    }
    clear() {
        this.bufferArr = new Array(this.initialValue);
        this.lastIndex = 0;
        this.currentIndex = 0;
    }
    checkForLoop() {
        if (this.lastIndex > this.initialValue - 1)
            this.lastIndex = 0;
    }
}
export class BufferFullError extends Error {
    constructor(message) {
        super(message);
        this.name = "Input error";
    }
}
export class BufferEmptyError extends Error {
    constructor(message) {
        super(message);
        this.name = "Undefined error";
    }
}
const buffer = new CircularBuffer(5);
buffer.write("1");
buffer.write("2");
buffer.write("3");
console.log(buffer.read());
console.log(buffer.read());
buffer.write("4");
console.log(buffer.read());
buffer.write("5");
buffer.write("6");
buffer.write("7");
buffer.write("8");
buffer.forceWrite("A");
buffer.forceWrite("B");
console.log("this is buffer", buffer);
console.log(buffer.read()); //6
console.log(buffer.read()); //7
console.log(buffer.read()); //8
console.log(buffer.read()); //A
console.log(buffer.read()); //B
// console.log("this is buffer", buffer.bufferArr);
// buffer.write("1");
// buffer.write("2");
// console.log("this is buffer", buffer.bufferArr);
// buffer.forceWrite("A");
// console.log("this is buffer", buffer.bufferArr);
// console.log(buffer.read());
// console.log("this is buffer", buffer.bufferArr);
// console.log(buffer.read());
