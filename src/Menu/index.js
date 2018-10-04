import data from './data';

function getRandomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default class Menu {
    getMenu() {
        return {
            meat: getRandomValue(data.meat),
            cereal: getRandomValue(data.cereals),
            vegetables: getRandomValue(data.vegetables),
        } 
    }

    changeAll(menu) {
        return {
            meat: getRandomValue(data.meat.filter(x => x.name !== menu.meat.name)),
            cereal: getRandomValue(data.cereals.filter(x => x.name !== menu.cereal.name)),
            vegetables: getRandomValue(data.vegetables.filter(x => x.name !== menu.vegetables.name)),
        };   
    }

    changeMeat(menu) {
        return {
            ...menu,
            meat: getRandomValue(data.meat.filter(x => x.name !== menu.meat.name)),
        };
    }

    changeCereals(menu) {
        return {
            ...menu,
            cereal: getRandomValue(data.cereals.filter(x => x.name !== menu.cereal.name)),
        };
    }

    changeVegetables(menu) {
        return {
            ...menu,
            vegetables: getRandomValue(data.vegetables.filter(x => x.name !== menu.vegetables.name)),
        };
    }
}