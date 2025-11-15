import openDB from 'idb'

const taskDB = openDB('keysDB','1',{
    upgrade(db){
        db.createObjectStore('keys')
    }
})

// get
export async function get_Keys(){
    return (await taskDB).get('keys',0)
} 

// set
export async function set_Keys(val){
    return (await taskDB).set('keys',val,0)
}