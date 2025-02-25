// Capitalizes the first letter of a string
function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Checks if an object or array is empty
function isEmpty(value) {
    if (Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    } else if (typeof value === 'object' && value !== null) {
        return Object.keys(value).length === 0;
    }
    return !value;
}

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Deep clone an object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Generate random integer between min and max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convert string to kebab-case
function toKebabCase(str) {
    return str && str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('-');
}

// Remove duplicates from an array
function uniqueArray(arr) {
    return [...new Set(arr)];
}

// Deep comparison between two objects
function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Export all functions
module.exports = {
    capitalize,
    isEmpty,
    debounce,
    throttle,
    deepClone,
    randomInt,
    toKebabCase,
    uniqueArray,
    isEqual
};
