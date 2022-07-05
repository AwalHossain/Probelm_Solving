class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % 
          this.data.length
      console.log(hash)
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data)
  }

  get(key){
    let address = this._hash(key);
    let currentBucket = this.data[address];

    if(currentBucket){
        for(let i=0; i<currentBucket.length; i++){
            if(currentBucket[i][0] === key){
                return currentBucket[i][i]
            }
        }
    }

    return undefined;
  }

}

const myHashTable = new HashTable(5);
// myHashTable._hash('va')
myHashTable.set('gram', 53)
myHashTable.set('ram', 53)
console.log(myHashTable.get("ram"),"Kim")
