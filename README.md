# Basic Node Utils

A collection of **basic utility functions** for Node.js to make development easier and more efficient.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/basic_node_utils.svg)](https://www.npmjs.com/package/basic_node_utils)
[![GitHub Issues](https://img.shields.io/github/issues/Soundar6385/Basic_Node_Utils.svg)](https://github.com/Soundar6385/Basic_Node_Utils/issues)

---

## 📦 Installation

```bash
npm install basic_node_utils
```

or with **yarn**:

```bash
yarn add basic_node_utils
```

---

## 🚀 Usage

```js
const { capitalize, isEmpty, debounce, throttle, deepClone, randomInt, toKebabCase, uniqueArray, isEqual } = require('basic_node_utils');

// Capitalize
console.log(capitalize("hello world")); // Output: Hello world

// Check if empty
console.log(isEmpty([]));               // Output: true
console.log(isEmpty("text"));           // Output: false

// Random Integer
console.log(randomInt(1, 100));         // Output: Random number between 1 and 100

// Convert to kebab-case
console.log(toKebabCase("Hello World Example")); // Output: hello-world-example

// Unique Array
console.log(uniqueArray([1, 2, 2, 3, 4, 4]));    // Output: [1, 2, 3, 4]

// Deep Clone
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);                // Output: { a: 1, b: { c: 2 } }

// Deep Compare
console.log(isEqual({ a: 1 }, { a: 1 }));   // Output: true
console.log(isEqual({ a: 1 }, { b: 1 }));   // Output: false
```

---

## 📚 Available Functions

| Function        | Description                                                |
|-----------------|------------------------------------------------------------|
| `capitalize(str)` | Capitalizes the first letter of a string.                  |
| `isEmpty(value)` | Checks if a string, array, or object is empty.             |
| `debounce(func, delay)` | Debounces a function by the specified delay.             |
| `throttle(func, limit)` | Throttles function execution to once every limit ms.  |
| `deepClone(obj)` | Deep clones an object or array.                             |
| `randomInt(min, max)` | Generates a random integer between min and max.         |
| `toKebabCase(str)` | Converts a string to kebab-case.                          |
| `uniqueArray(arr)` | Returns an array with unique values.                      |
| `isEqual(obj1, obj2)` | Performs a deep comparison between two objects.          |

---

## 🐛 Reporting Issues

If you encounter any bugs or issues, please [open an issue](https://github.com/Soundar6385/Basic_Node_Utils/issues).

---

## 🛠 Contributing

1. **Fork** the repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/Soundar6385/Basic_Node_Utils.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Commit** your changes:
   ```bash
   git commit -m "Add your feature"
   ```
5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** 🚀

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

---

### 🚀 **Steps to Push to GitHub**
1. **Initialize Git (if not done):**
   ```bash
   git init
   ```

2. **Add remote repository:**
   ```bash
   git remote add origin https://github.com/Soundar6385/Basic_Node_Utils.git
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial commit with utilities and README"
   git push -u origin main
   ```

---