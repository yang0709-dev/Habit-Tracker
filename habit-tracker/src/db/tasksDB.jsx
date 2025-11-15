import {openDB} from 'idb';

const taskDB = openDB('tasksDB',1,{
    upgrade(db){
        db.createObjectStore('tasks')
    }
})

// get
export async function get_Tasks(key){
    return (await taskDB).get('tasks',key);
} 

// set
// [name,desc]
export async function set_Tasks(val,key){
    return (await taskDB).put('tasks',val,key);
}

// get all keys
export async function get_Tasks_Keys() {
  return (await taskDB).getAllKeys('tasks');
}