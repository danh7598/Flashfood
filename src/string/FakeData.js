import hamburger_category from '../assets/hamburger_category.png';
import cherry_category from '../assets/cherry_category.png';
import rice_category from '../assets/rice_category.png';
import hamburger_popular from '../assets/hamburger_popular.png';
import hot_tacos from '../assets/hot_tacos.png';
import vegetable_biryani from '../assets/vegetable_biryani.png';
import pizza_hut_logo from '../assets/pizza-hut-logo.png';
import burger_king_logo from '../assets/burger-king-logo.png';
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
];
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
];
export const dataCart = [
    {
        name: "Chef's Burger",
        price: 15.99,
        size: '12',
        quantity: 2,
        image: hamburger_popular
    },
    {
        name: 'Noodels',
        price: 10.99,
        size: '12',
        quantity: 1,
        image: hamburger_popular

    },
    {
        name: "Sandwich",
        price: 15.99,
        size: '12',
        quantity: 3,
        image: hamburger_popular
    },
    {
        name: "Sandwich",
        price: 15.99,
        size: '12',
        quantity: 3,
        image: hamburger_popular
    },
    {
        name: "Sandwich",
        price: 15.99,
        quantity: 3,
        image: hamburger_popular
    },

];
export const dataOrderHistory = [
    {
        date: '29 NOV 2020',
        data: [
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
        ]
    },
    {
        date: '27 NOV 2020',
        data: [
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order Cancel'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            }
        ]
    }
];
export const dataOrderUpcoming = [
    {
        data: [
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                id: '243240',
                time: '29 Nov, 20:30',
                status: 'Food on the way'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                id: '162432',
                time: '29 Nov, 20:30',
                status: 'Food on the way'
            },
        ]
    },
    {
        title: 'Lastest Orders',
        data: [
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
            {
                imageSource: pizza_hut_logo,
                name: 'Pizza Hut',
                quantity: 3,
                price: 35.30,
                time: '29 Nov, 20:30',
                status: 'Order delivered'
            },
        ]
    }
];
export const dataCoupon = [
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '29 Nov 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '29 Nov 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '29 Nov 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '29 Nov 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '29 Nov 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '50%',
        status: 'valid',
        date: '29 Jan 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '50%',
        status: 'valid',
        date: '29 Jan 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '50%',
        status: 'valid',
        date: '29 Jan 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '50%',
        status: 'valid',
        date: '29 Jan 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '50%',
        status: 'valid',
        date: '29 Jan 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '40%',
        status: 'used',
        date: '29 Dec 2020',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '10%',
        status: 'valid',
        date: '27 Fed 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '60%',
        status: 'valid',
        date: '29 Nov 2021',
        imageSource: burger_king_logo
    },
    {
        name: 'Burger King',
        value: '20%',
        status: 'used',
        date: '15 Oct 2020',
        imageSource: burger_king_logo
    },
];
export const dataNotification = [
    {
        time: '05-04-2021',
        data: [
            {
                title: "Domino's - Buy 1 get 1 free",
                description: 'Buy 1 get 1 free for small sizes until Nov 30, 2020',
                time: 'a few seconds',
                imageSource: hamburger_popular,
                kind: 'promotion'
            },
            {
                title: "Veg Biryani - 35% sale today",
                description: 'Enter discount code NEW2021 for 35% off for Veg Biryani',
                imageSource: vegetable_biryani,
                time: '5 mins',
                kind: 'promotion'
            },
            {
                title: "Wrap Sandwich",
                status: "Completed",
                shipper: 'Nick Will',
                imageSource: vegetable_biryani,
                time: '10 mins',
                kind: 'promotion'
            },
        ]
    },
    {
        time: '05-03-2021',
        data: [
            {
                title: "Domino's - Buy 1 get 1 free",
                description: 'Buy 1 get 1 free for small sizes until Nov 30, 2020',
                time: 'a few seconds',
                imageSource: hamburger_popular,
                kind: 'promotion'
            },
            {
                title: "Veg Biryani - 35% sale today",
                description: 'Enter discount code NEW2021 for 35% off for Veg Biryani',
                imageSource: vegetable_biryani,
                time: '5 mins',
                kind: 'promotion'
            },
            {
                title: "Wrap Sandwich",
                status: "Completed",
                shipper: 'Nick Will',
                imageSource: vegetable_biryani,
                time: '10 mins',
                kind: 'promotion'
            },
        ]
    },
    {
        time: '04-25-2021',
        data: [
            {
                title: "Domino's - Buy 1 get 1 free",
                description: 'Buy 1 get 1 free for small sizes until Nov 30, 2020',
                time: 'a few seconds',
                imageSource: hamburger_popular,
                kind: 'promotion'
            },
            {
                title: "Veg Biryani - 35% sale today",
                description: 'Enter discount code NEW2021 for 35% off for Veg Biryani',
                imageSource: vegetable_biryani,
                time: '5 mins',
                kind: 'promotion'
            },
            {
                title: "Wrap Sandwich",
                status: "Completed",
                shipper: 'Nick Will',
                imageSource: vegetable_biryani,
                time: '10 mins',
                kind: 'promotion'
            },
        ]
    },


];