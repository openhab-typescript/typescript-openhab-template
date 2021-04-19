// This just features a small subset of the functions present
// in the root scope that is normally present.
export default interface openHabRoot
{
    Java: {
        type(identier: string) : any
    },
    itemRegistry: {
        getItem(itemId: string) : any,
        getItems() : {
            size(): number
        }
        
    }
}