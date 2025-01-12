// Function jo paani ki bottle lene ki process manage karega
function buyWaterBottle() {
    try {
        console.log("Paani ki bottle lene jaa rahe hain...");
        // Notify karte hain ki bottle lene ki process start ho rahi hai

        let bottle = checkBottleAvailability();
        // Helper function ko call karte hain jo check karega bottle available hai ya nahi

        console.log("Bottle mil gayi:", bottle);
        // Agar bottle available hai toh ye message print karega
        return bottle;
        // Bottle ka detail return kar raha hai
    } catch (error) {
        console.log("Error hua: ", error.message);
        // Agar koi error aayi, toh uska message log karega
        return "Koi bottle nahi mili, try again later.";
        // Error ke case me friendly fallback message return karega
    }
}

// Helper function jo bottle availability check karega
function checkBottleAvailability() {
    let isAvailable = false;
    // Simulate karte hain ki bottle unavailable hai

    if (!isAvailable) {
        throw new Error("Bottle Out of Stock!");
        // Agar bottle nahi hai toh error throw karega
    }

    return "1 Liter Bisleri Bottle";
    // Agar bottle available hai toh yeh return karega
}

// Main function ko call karte hain
let result = buyWaterBottle();
console.log("Final Result:", result);
// Jo result return hoga usse print karenge
