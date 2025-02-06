# GadgetHaven - E-Commerce Platform

**GadgetHaven** is an e-commerce platform that allows users to explore and purchase gadgets from a variety of categories. The site is built based on a detailed Figma design, with a focus on a smooth and user-friendly experience. It includes features like product filtering, shopping cart, and wishlist systems, and is designed to be both functional and visually appealing.

## Screenshots

### Home-Gadget-Heaven

![Screenshot](https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven/blob/main/src/assets/screenshot/Statistics-Gadget-Heaven-Home.png)

### Statistics-Gadget-Heaven

![Screenshot](https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven/blob/main/src/assets/screenshot/Statistics-Gadget-Heaven-p1.png)
![Screenshot](https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven/blob/main/src/assets/screenshot/Statistics-Gadget-Heaven-p2.png)

### Dashboard-Gadget-Heaven-Dashboard

![Screenshot](https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven/blob/main/src/assets/screenshot/Dashboard-Gadget-Heaven-Dashboard-p1.png)
![Screenshot](https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven/blob/main/src/assets/screenshot/Dashboard-Gadget-Heaven-Dashboard-p2.png)

## 🛠 Technologies Used

- HTML
- CSS
- TailwindCSS
- DaisyUI
- JavaScript
- React
- React Router
- Context API

## 📦 Dependencies Used

The following dependencies are used in this project:

- `localforage`: ^1.10.0
- `match-sorter`: ^8.0.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.4.0
- `react-rating-stars-component`: ^2.2.0
- `react-router-dom`: ^6.27.0
- `react-toastify`: ^10.0.6
- `recharts`: ^2.14.1
- `sort-by`: ^1.2.0

## 🛠 How to Run Locally

Follow these steps to get the project running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shahriarkawsik/PHB10A08-Gadget-Heaven.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd gadget-heaven
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **View the app:**
   Open your browser and go to `http://localhost:5173`.

## key Features of the Website

1. **See All Gadgets:** Browse through a variety of gadgets with different categories.
2. **Product Routing with Error Page:** Navigate through product categories with dynamic routing. An error page handles non-existent routes.
3. **View Single Gadget Details:** View individual product details with a dynamic route.
4. **Add/Remove Gadget to Cart:** Add gadgets to the shopping cart and remove them as needed.
5. **Add/Remove Gadget to Wishlist:** Add a gadget to the wishlist (each gadget can be added only once) and remove it as desired.

## React Concepts Used

The following React concepts were implemented in this project:

- **JSX**: Used for creating UI elements.
- **State**: Managed component state to reflect user actions like adding products to the cart or wishlist.
- **React Hooks**: Used to manage component lifecycle and state updates (`useState`, `useEffect`).
- **React Router**: Handled routing between pages, including dynamic routes for viewing individual products.
- **Recharts**: Integrated to display charts for analyzing product statistics or other data (if applicable).
- **React Toastify**: Used for showing notification messages for user actions, such as adding items to the cart or wishlist.

## Technologies Used

- **React** for the frontend UI.
- **Context API** to manage the global state for the shopping cart and wishlist.
- **Tailwind CSS** for responsive and stylish UI design.
- **React Router** for handling different routes and dynamic page rendering.
- **Recharts** for displaying product data and statistics.

## Data Management

The application uses **Context API** to manage the global state for the shopping cart and wishlist.

### Live Website

You can access the live website here:  
[**GadgetHaven Live**](https://determined-grandmother.surge.sh)

### Requirement Document

For detailed project requirements and specifications, refer to the document:  
[**Project Requirements**](https://drive.google.com/file/d/1gmI3oFWHdXmWeqGNSQTmiWau3scD1Eeu/view?usp=sharing)
