"use strict";
/**
 *
 */
class IpcTarget {
    constructor(optionsArg) {
        this.alias = optionsArg.alias;
    }
    /**
     * registers a function
     */
    register(funcArrayArg) {
        for (let funcItem of funcArrayArg) {
            this.funcArray.push(funcItem);
        }
    }
}
exports.IpcTarget = IpcTarget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy5pcGN0YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLmlwY3RhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7O0dBRUc7QUFDSDtJQUlJLFlBQVksVUFBcUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVEsQ0FBQyxZQUFtQjtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0NBRUo7QUFqQkQsOEJBaUJDIn0=