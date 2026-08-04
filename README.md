# 🍕 Pizzeria

Pizzeria is a responsive pizza ordering web application developed using **Angular 16**. <img src="https://angular.io/assets/images/logos/angular/angular.svg"
       width="45"
       align="center"
       alt="Angular Logo">  
The application allows users to browse pizzas, add them to a shopping cart, customize their own pizza using different toppings, manage cart quantities, and view the total order cost.

This project was generated with **Angular CLI 16.2.16**.

## ✨ Features

- Browse available pizzas
- Veg and non-veg pizza identification
- Add pizzas to the shopping cart
- Increase or decrease pizza quantity
- Remove individual items from the cart
- Clear the complete shopping cart
- Build your own pizza by selecting toppings
- Dynamic price calculation
- Order summary with total amount
- Payment success screen
- Responsive design for desktop, tablet, and mobile devices
- Shared cart data across components using Angular services
- Pizza and ingredient data loaded from JSON using HttpClient

## 🛠️ Technologies Used

- Angular 16
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Angular Router
- Angular HttpClient
- JSON

## 📂 Main Components

The application contains the following major sections:

- **Home** – Introduction to Pizzeria
- **Order Pizza** – Displays available pizzas and allows users to add them to the cart
- **Build Your Pizza** – Allows users to select ingredients and calculate the custom pizza price
- **Shopping Cart** – Displays selected pizzas, quantities, custom pizza ingredients, and total price
- **Payment** – Displays a confirmation screen after successful payment

## 🔄 Application Flow

```text
Home
  ↓
Order Pizza
  ↓
Add to Cart
  ↓
Shopping Cart
  ↓
Manage Quantity
  ↓
Payment
  ↓
Payment Successful
```

Users can also create a customized pizza:

```text
Build Your Pizza
       ↓
Select Ingredients
       ↓
Calculate Price
       ↓
Add Custom Pizza
       ↓
Shopping Cart
```

## 🚀 Development Server

Install the project dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Open:

```text
http://localhost:4200/
```

The application automatically reloads when source files are modified.

## 🏗️ Build

Run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧩 Code Scaffolding

To generate a new component:

```bash
ng generate component component-name
```

Other Angular elements can also be generated:

```bash
ng generate service service-name
ng generate directive directive-name
ng generate pipe pipe-name
ng generate guard guard-name
```

## 🧪 Unit Tests

Run:

```bash
ng test
```

to execute unit tests using Karma.

## 📱 Responsive Design

The application is designed to work across:

- Desktop computers
- Tablets
- Android phones
- iPhones and other small-screen devices

CSS media queries are used to adapt the layout according to screen size.

## 📌 Angular Version

- Angular: 16
- Angular CLI: 16.2.16

## 📖 Further Help

For Angular CLI commands:

```bash
ng help
```

You can also refer to the official Angular CLI documentation.
