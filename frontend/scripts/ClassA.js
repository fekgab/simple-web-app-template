export class ClassA {
    constructor(variable) {
        this.testVariable = variable;
    }

    getVariable() {
        return this.testVariable;
    }

    static getVariableImmediate() {
        return 'immediate data';
    }
}