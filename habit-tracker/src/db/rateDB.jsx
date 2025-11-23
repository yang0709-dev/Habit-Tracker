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
