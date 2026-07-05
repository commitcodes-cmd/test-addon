//% color="#2E4053" icon="\uf02b" block="Custom Variables"
namespace myVariables {
    let storage: { [key: string]: any } = {};

    /**
     * Declares or sets a variable using a custom text name.
     */
    //% block="let %name = %value"
    //% value.shadow="text"
    //% weight=100
    export function declareLet(name: string, value: any): void {
        storage[name] = value;
    }

    /**
     * Gets the value of your custom variable.
     */
    //% block="get %name"
    //% weight=90
    export function getLet(name: string): any {
        return storage[name] !== undefined ? storage[name] : "";
    }
}
