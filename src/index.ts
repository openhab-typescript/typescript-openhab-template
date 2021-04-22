// This is the "main" file. Import modules into here.
// Note that while you can import any module, you are still restricted
// by the fact that Nashorn (openHABs JS Interpreter) only understands ECMAScript 5.1
// It has no concept of Node, and as such, importing, for example, Node's file utils, will not work.

// 'this' references the same context as it does when writing regular ECMAScript rules.

// To show how importing code from a different file would work, a logger-wrapper has been created in the ./logger.ts file.
import LoggerFactory, { Logger } from "./logger";
import {thisOpenHab} from "openhab-typescript-typings";

// While the following statement will function correctly when uncommented, 
// it is discouraged to use "this" directly in the root scope.
/* 
//@ts-ignore
this.logger = typeof this.logger === "undefined" ? LoggerFactory.getByRuleId("myRuleId") : this.logger;
*/


// Instead store this in a variable. That way you can add an interface to the variable which will help with autocompletion.
const _this : thisOpenHab & ownRootDefinitions = this;
_this.logger = typeof _this.logger === "undefined" ? LoggerFactory.getByRuleId("myRuleId") : _this.logger;


interface ownRootDefinitions{
    logger?: Logger | undefined;
}

// This will be an object
_this.logger.info("Type of this.Java is {}", typeof _this.Java)
// You can use templating here too. logger references the Java class.
_this.logger.info("Hello, {}!", "World");

// items was declared in openHabRoot.ts
const allItems = _this.itemRegistry.getItems();
// Note that you do not have to prepent _this in front of Java, itemRegistry, etc. TypeScript will just complain about it.
//@ts-ignore
_this.logger.info("Is _this.itemRegistry instanceof ItemRegistry? : {}", _this.itemRegistry instanceof Java.type("org.openhab.core.items.ItemRegistry"))

_this.logger.info("There are {} items.", allItems.size());

