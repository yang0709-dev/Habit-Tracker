import { openDB } from "idb";

const rateDB = openDB("rates", 1, {
  upgrade(db) {
    if (!rateDB.objectStoreNames.contains("rate")) {
      db.createObjectStore("rate");
    }
  },
});

export async function get(key) {
  return (await rateDB).get("rate", key);
}

export async function set(key, val) {
  return (await rateDB).put("rate", val, key);
}

export async function keys() {
  return (await rateDB).getAllKeys("rate");
}

export async function all(){
  return (await rateDB).getAll('rate')
}

export async function entries(){
  return (await rateDB).getAll('rate').then(async vals=>{
    const keys = await (await rateDB).getAllKeys('rate')
    keys.map((k,i)=>({key:k,value:vals[i]}))
  })
}