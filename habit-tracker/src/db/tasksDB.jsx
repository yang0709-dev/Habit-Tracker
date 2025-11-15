import openDB from 'idb'

const taskDB = openDB('tasksDB','1',{
    upgrade(db){
        db.createObjectStore('tasks')
    }
})

// get
export async function get_Tasks(key){
    return (await taskDB).get('tasks',key)
} 

// set
export async function set_Tasks(val,key){
    return (await taskDB).set('tasks',val,key)
}

// get all keys
export async function keys() {
  return (await taskDB).getAllKeys('tasks');
}