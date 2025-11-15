import openDB from 'idb'

const taskDB = openDB('tasksDB','1',{
    upgrade(db){
        db.createObjectStore('tasks')
    }
})

// get
export async function get(key){
    return (await taskDB).get('tasks',key)
} 

// set
export async function set(val,key){
    return (await taskDB).set('tasks',val,key)
}