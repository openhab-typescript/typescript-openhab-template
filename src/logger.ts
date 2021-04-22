export default class LoggerFactory
{
    public static getByRuleId(ruleId: string)
    {
        // TypeScript does not know about Java. It does not know that this script will be run in Nashorn. 
        // As such, it will complain about Java being undefined. 
        // To fix this, references to "unknown" variables that are available in the script must be 
        // annotated with a @ts-ignore.
        //@ts-ignore 
        return Java.type("org.slf4j.LoggerFactory").getLogger("org.openhab.rule." + ruleId)
    }
}

export interface Logger
{
    trace(message: string, ...params: any[]):void;
    info(message: string, ...params: any[]):void;
    warn(message: string, ...params: any[]):void;
    error(message: string, ...params: any[]):void;
}