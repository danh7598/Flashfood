import hamburger_category from '../assets/hamburger_category.png'
import cherry_category from '../assets/cherry_category.png'
import rice_category from '../assets/rice_category.png'
import hamburger_popular from '../assets/hamburger_popular.png'
import hot_tacos from '../assets/hot_tacos.png'
import vegetable_biryani from '../assets/vegetable_biryani.png'
export const dataCategory = [
    {
        id: 'gfdg',
        title: 'Fast Food',
        img: hamburger_category
    },
    {
        id: 'vcxd',
        title: 'Fruit Item',
        img: cherry_category
    },
    {
        id: 'rfd',
        title: 'Rice Item',
        img: rice_category
    }
]
export const dataPopular = [
    {
        id: 'asd23',
        name: 'Hamburger',
        description: 'Chicken patty hamburger',
        price: 15.99,
        calories: 78,
        image: hamburger_popular,
        favoured: true
    },
    {
        id: 'asd2354',
        name: 'Hot Tacos',
        description: 'Mexican tortilla & tacos',
        price: 10.99,
        calories: 78,
        image: hot_tacos,
        favoured: false
    },
    {
        id: 'asd2312',
        name: 'Veg Biryani',
        description: 'Indian vegetable biryani',
        price: 10.99,
        calories: 78,
        image: vegetable_biryani,
        favoured: true
    }
]
export const dataCart = [
    {
        name: "Chef's Burger",
        price: 15.99,
        quantity: 2,
        image: hamburger_popular
    },
    {
        name: 'Noodels',
        price: 10.99,
        quantity: 1,
        image: hamburger_popular

    },
    {
        name: "Sandwich",
        price: 15.99,
        quantity: 3,
        image: hamburger_popular
    },
    {
        name: "Sandwich",
        price: 15.99,
        quantity: 3,
        image: hamburger_popular
    },
    {
        name: "Sandwich",
        price: 15.99,
        quantity: 3,
        image: hamburger_popular
    },

]