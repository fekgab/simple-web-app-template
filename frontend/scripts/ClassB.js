import { ClassA } from './ClassA';

export class ClassB extends ClassA{
    constructor(variable) {
        super(variable);
    }

    getVariable() {
        return this.testVariable;
    }
}

let classA = new ClassA(5);
console.log(`ClassA variable with getter: ${classA.getVariable()}`);
console.log(`ClassA variable directly: ${ClassA.getVariableImmediate()}`);

let classB = new ClassB(5);
console.log(`ClassB variable with getter: ${classB.getVariable()}`);
console.log(`ClassB variable directly from parent class: ${ClassB.getVariableImmediate()}`);