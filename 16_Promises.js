// Jab tumhare program me kuch aise kaam hote hain jo time lete hain (e.g., server se data lana), tab promises use karte hain.Promise ka kaam hai ki wo ensure kare ki kaam pura hone ke baad tumhe result de(chahe success ho ya failure), .then() and.catch() ka use promise ke result ko handle karne ke liye hota hai.


let promise = new Promise((resolve, reject) => {
    // Asynchronous work
    let success = true; // Change this to false to see the rejection case

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed.");
    }
});

// Using the promise
promise
    .then((message) => {
        console.log("Success:", message); // Executes if resolve is called
    })
    .catch((error) => {
        console.log("Error:", error); // Executes if reject is called
    });
