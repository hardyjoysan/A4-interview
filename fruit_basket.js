'use strict';

import { getFileContents } from './load_content.js';
import fs from 'fs';

class Fruit{
    constructor(type){
        this.type = type;
    }

    sameFruits(contents){
        return contents.filter((item) => {
            return item.type === this.type;
        })
    }
}

class FruitBasket{
    constructor(data){
        this.id = data.id;
        this.contents = data.contents;
    }

    // How many fruits are in the basket
    get totalFruits(){
        return this.contents.length;
    }

    // How heavy is the basket
    get totalWeight(){
        return this.contents.reduce((prev, item)=> {
            return prev + item.weight;
        }, 0);
    }

    // How many fruits of a specific type are in the basket
    fruitCounts(){
        let fruits = [];
        let checks = [];
        for (const item of this.contents) {
            if (!checks.includes(item.type)) {
                let fruit = new Fruit(item.type);
                let same = fruit.sameFruits(this.contents);
                checks.push(fruit.type);
                fruits.push({ type: fruit.type, count: same.length })
            }
        }

        return fruits;
    }
}

const input = await getFileContents('input.json');
const output = JSON.parse(input).map(basket => {
    let b = new FruitBasket(basket);
    return {
        id: b.id,
        total_fruits: b.totalFruits,
        total_weight: b.totalWeight,
        fruit_counts: b.fruitCounts()
    }
});

fs.writeFile('output.json', JSON.stringify(output), "utf-8", (err, data) => {
    if (err) {
        console.log(`Error writing file contents: ${err}`);
    }
    console.log('output.json file updated with the result');
});