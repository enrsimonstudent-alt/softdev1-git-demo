const inventory = [
    { itemId: "S001", itemName: "Ultrasonic Sensor", category: "Sensors", quantity: 12, minimumStock: 5, unitPrice: 180 },
    { itemId: "S002", itemName: "Temperature Sensor", category: "Sensors", quantity: 4, minimumStock: 6, unitPrice: 220 },
    { itemId: "M001", itemName: "Arduino Uno", category: "Microcontrollers", quantity: 10, minimumStock: 5, unitPrice: 550 },
    { itemId: "M002", itemName: "ESP32 Board", category: "Microcontrollers", quantity: 8, minimumStock: 4, unitPrice: 420 },
    { itemId: "C001", itemName: "Bluetooth Module", category: "Communication Modules", quantity: 3, minimumStock: 5, unitPrice: 300 },
    { itemId: "C002", itemName: "Wi-Fi Module", category: "Communication Modules", quantity: 7, minimumStock: 3, unitPrice: 350 },
    { itemId: "P001", itemName: "Resistor Pack", category: "Passive Components", quantity: 30, minimumStock: 10, unitPrice: 120 },
    { itemId: "P002", itemName: "Capacitor Pack", category: "Passive Components", quantity: 18, minimumStock: 8, unitPrice: 150 }
];

function needsRestocking(item) {
    return item.quantity < item.minimumStock;
}

let totalQuantity = 0;
let totalValue = 0;
let mostExpensiveItem = inventory[0];
let highestQuantityItem = inventory[0];
const lowStockItems = [];

for (const item of inventory) {
    totalQuantity += item.quantity;
    totalValue += item.quantity * item.unitPrice;

    if (needsRestocking(item)) {
        lowStockItems.push(item);
    }

    if (item.unitPrice > mostExpensiveItem.unitPrice) {
        mostExpensiveItem = item;
    }

    if (item.quantity > highestQuantityItem.quantity) {
        highestQuantityItem = item;
    }
}

console.log("Inventory Summary:");
console.log(`Different inventory items: ${inventory.length}`);
console.log(`Total quantity: ${totalQuantity}`);
console.log(`Total monetary value: ₱${totalValue.toFixed(2)}`);

console.log("\nItems below minimum stock:");
for (const item of lowStockItems) {
    console.log(`${item.itemId} — ${item.itemName} (${item.quantity} available, minimum ${item.minimumStock})`);
}

console.log(`\nMost expensive item: ${mostExpensiveItem.itemName} — ₱${mostExpensiveItem.unitPrice.toFixed(2)}`);
console.log(`Highest available quantity: ${highestQuantityItem.itemName} — ${highestQuantityItem.quantity} units`);
