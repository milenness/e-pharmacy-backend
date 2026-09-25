# 💊 E-Pharmacy API (Backend)

## 🔗 [Live API URL](https://e-pharmacy-backend-6lut.onrender.com/api) | 🖥️ [Frontend Repository](https://github.com/milenness/e-pharmacy-frontend)

**E-Pharmacy API** is a robust, RESTful backend service built to power the E-Pharmacy web application. It handles secure user authentication, product catalog management, shopping cart operations, and store directory queries using a modern Node.js and MongoDB stack.

## 🚀 Key Features

* **Secure Authentication & Authorization** — Implements JWT-based authentication, password hashing with bcrypt, and protected private routes.
* **Robust Data Validation** — Strict validation of incoming request bodies (email formats, password strength, phone numbers) before database injection to ensure data integrity.
* **Centralized Error Handling** — Catch-all error processing that returns clear, standardized HTTP status codes (200, 400, 401, 403, 500) and descriptive messages to the client.
* **Advanced Search & Filtering** — Supports query parameters for searching and filtering the medicine catalog directly via the database.
* **Cart & Order Management** — Endpoints dedicated to securely fetching cart items, dynamically updating quantities, and processing final checkouts for authorized users.
* **Modular Architecture** — Clean separation of concerns with isolated controllers, models, routes, and middleware.

## 🛠 Tech Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB & Mongoose ODM
* **Authentication:** JSON Web Tokens (JWT) & bcrypt
* **CORS & Security:** `cors`, `dotenv`
* **Deployment:** Render (or equivalent)

## 🚏 API Endpoints

### 🔐 Authentication & Users
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/user/register` | Public | Validates data and registers a new user, hashing the password. |
| `POST` | `/api/user/login` | Public | Authenticates user and returns a JWT access token. |
| `GET` | `/api/user/logout` | Private | Terminates the current user session. |
| `GET` | `/api/user/user-info` | Private | Retrieves the authenticated user's name and email. |

### 🏥 Medicine Stores
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/stores/nearest` | Public | Returns a list of the nearest pharmacies with details. |
| `GET` | `/api/stores` | Public | Returns the complete list of available pharmacies. |

### 💊 Products & Reviews
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Public | Fetches medicines list. Supports search and filter query parameters. |
| `GET` | `/api/products/:id` | Public | Fetches detailed information for a specific product by ID. |
| `GET` | `/api/customer-reviews` | Public | Fetches customer reviews for the landing page. |

### 🛒 Cart & Checkout
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/cart` | Private | Retrieves the list of products currently in the user's cart. |
| `PUT` | `/api/cart/update` | Private | Updates the quantity of a specific item in the cart. |
| `POST` | `/api/cart/checkout` | Private | Processes checkout details and finalized orders. |

## 📫 How to reach me:

[LinkedIn](https://www.linkedin.com/in/milena-karpenko) | [Telegram](https://t.me/sombrM) | [Email](mailto:milen.karpenko@gmail.com)