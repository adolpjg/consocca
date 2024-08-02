function Yallist$1() {
    if (!(this instanceof Yallist$1)) {
        throw new Error("Must be called with 'new'");
    }
    // Constructor logic here
}

// Example usage:
try {
    let list = new Yallist$1(); // This will work since it's called with 'new'
    console.log("Instance created successfully.");
} catch (e) {
    console.error(e.message);
}

try {
    let list = Yallist$1(); // This will throw an error
} catch (e) {
    console.error(e.message);
}
