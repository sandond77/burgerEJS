const menu = {
	burgers: [
		{
			name: 'Double-Double',
			price: 4.99,
			description:
				'Two beef patties, two slices of American cheese, lettuce, tomato, onion, and spread'
		},
		{
			name: 'Cheeseburger',
			price: 3.49,
			description: 'Hamburger with a slice of American cheese'
		},
		{
			name: 'Hamburger',
			price: 2.99,
			description:
				'Fresh beef patty with lettuce, tomato, onion, and spread on a freshly baked bun'
		}
	],
	fries: [
		{
			name: 'French Fries',
			price: 2.99,
			description: 'Freshly cut potatoes, cooked in 100% sunflower oil'
		}
	],
	drinks: [
		{
			name: 'Soft Drink',
			sizes: {
				Small: 1.5,
				Medium: 1.75,
				Large: 2.0,
				'X-Large': 2.25
			},
			flavors: [
				'Coca Cola',
				'Diet Coke',
				'7 Up',
				'Pink Lemonade',
				'Unsweetened Tea',
				'Dr. Pepper',
				"Barg's Root Beer"
			]
		},
		{
			name: 'Milkshake',
			price: 2.99,
			flavors: ['Chocolate', 'Vanilla', 'Strawberry']
		},
		{
			name: 'Coffee',
			price: 1.75
		}
	],
	secretMenu: [
		{
			name: 'Animal Style Burger',
			price: 3.99,
			description:
				'Beef patty cooked with mustard, pickles, extra spread, grilled onions, lettuce, and tomato'
		},
		{
			name: 'Protein Style',
			price: 3.99,
			description: 'Burger wrapped in lettuce instead of a bun'
		},
		{
			name: '4x4',
			price: 5.99,
			description:
				'Four beef patties and four slices of cheese with all the fixings'
		},
		{
			name: 'Animal Style Fries',
			price: 3.99,
			description: 'Fries topped with melted cheese, spread, and grilled onions'
		}
	]
};

// for (let item in menu) {
// 	let group = menu[item];
// 	// console.log(group);
// 	// group.forEach((food) => {
// 	// 	console.log(food);
// 	// });
// 	console.log(menu['burgers']);
// }
// console.log(menu['burgers']);
// const burgers = menu['burgers'];

// // console.log(menu['burgers'])
// // console.log(menu['fries']);
// // console.log(menu['drinks']);
// console.log(menu['secretMenu']);

console.log(menu.drinks.flavors);
