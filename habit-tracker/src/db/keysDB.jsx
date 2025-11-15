import {openDB} from 'idb';

const keysDB = openDB('keysDB',1,{
    upgrade(db){
        if(!db.objectStoreNames.contains('keys')){
            const store = db.createObjectStore('keys',{keyPath:'id'});
            store.put(0)
        }
    }
});

// get
export async function get_Keys(){
    return (await keysDB).get('keys',0);
} 

// set
export async function set_Keys(val){
    return (await keysDB).put('keys',{key:0,value:val});
}