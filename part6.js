const equipment = [
    { id: "EQ001", name: "Digital Multimeter", category: "Test Equipment", owned: 8, borrowed: 3, condition: "Good", minimumAvailable: 2 },
    { id: "EQ002", name: "Oscilloscope", category: "Test Equipment", owned: 4, borrowed: 4, condition: "Good", minimumAvailable: 1 },
    { id: "EQ003", name: "Function Generator", category: "Test Equipment", owned: 5, borrowed: 2, condition: "For Repair", minimumAvailable: 1 },
    { id: "EQ004", name: "Soldering Iron", category: "Tools", owned: 10, borrowed: 6, condition: "Good", minimumAvailable: 3 },
    { id: "EQ005", name: "DC Power Supply", category: "Power Equipment", owned: 6, borrowed: 2, condition: "Good", minimumAvailable: 2 },
    { id: "EQ006", name: "Arduino Uno Kit", category: "Microcontrollers", owned: 12, borrowed: 5, condition: "Good", minimumAvailable: 4 },
    { id: "EQ007", name: "ESP32 Kit", category: "Microcontrollers", owned: 9, borrowed: 8, condition: "Good", minimumAvailable: 2 },
    { id: "EQ008", name: "Raspberry Pi Kit", category: "Microcontrollers", owned: 5, borrowed: 1, condition: "For Repair", minimumAvailable: 1 },
    { id: "EQ009", name: "Logic Analyzer", category: "Test Equipment", owned: 3, borrowed: 0, condition: "Damaged", minimumAvailable: 1 },
    { id: "EQ010", name: "Electronic Component Kit", category: "Components", owned: 15, borrowed: 7, condition: "Good", minimumAvailable: 5 }
];

function availableQuantity(item) {
    return item.owned - item.borrowed;
}

function isLowStock(item) {
    return availableQuantity(item) <= item.minimumAvailable;
}

function isUnavailable(item) {
    return availableQuantity(item) === 0;
}

function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

function filterByCategory(items, category) {
    const matches = [];

    for (const item of items) {
        if (item.category === category) {
            matches.push(item);
        }
    }

    return matches;
}

// Extension A — Borrow Equipment
function borrowEquipment(item, quantity) {
    if (quantity <= 0) {
        return "Borrow quantity must be greater than zero.";
    }

    if (quantity > availableQuantity(item)) {
        return `Borrow failed: only ${availableQuantity(item)} unit(s) are available.`;
    }

    item.borrowed += quantity;
    return `Borrow successful: ${quantity} unit(s) of ${item.name} borrowed.`;
}

// Extension C — Equipment Condition
function countConditions(items) {
    const counts = {
        Good: 0,
        "For Repair": 0,
        Damaged: 0
    };

    for (const item of items) {
        if (counts[item.condition] !== undefined) {
            counts[item.condition]++;
        }
    }

    return counts;
}

function displayEquipment(items) {
    console.log("ALL EQUIPMENT RECORDS");

    for (const item of items) {
        console.log(
            `${item.id} | ${item.name} | ${item.category} | ` +
            `Owned: ${item.owned} | Borrowed: ${item.borrowed} | ` +
            `Available: ${availableQuantity(item)} | Condition: ${item.condition} | ` +
            `Minimum Available: ${item.minimumAvailable}`
        );
    }
}

function generateSummary(items) {
    let totalOwned = 0;
    let totalAvailable = 0;
    let totalBorrowed = 0;
    let attentionCount = 0;

    for (const item of items) {
        totalOwned += item.owned;
        totalAvailable += availableQuantity(item);
        totalBorrowed += item.borrowed;

        if (isLowStock(item) || isUnavailable(item) || item.condition !== "Good") {
            attentionCount++;
        }
    }

    return {
        equipmentTypes: items.length,
        totalOwned,
        totalAvailable,
        totalBorrowed,
        attentionCount
    };
}

displayEquipment(equipment);

console.log("\nLOW-STOCK EQUIPMENT");
for (const item of equipment) {
    if (isLowStock(item)) {
        console.log(`${item.id} — ${item.name} (${availableQuantity(item)} available)`);
    }
}

console.log("\nUNAVAILABLE EQUIPMENT");
for (const item of equipment) {
    if (isUnavailable(item)) {
        console.log(`${item.id} — ${item.name}`);
    }
}

const searchId = "EQ006";
const foundItem = findById(equipment, searchId);

console.log(`\nSEARCH BY ID: ${searchId}`);
if (foundItem !== null) {
    console.log(`${foundItem.name} — ${availableQuantity(foundItem)} unit(s) available`);
} else {
    console.log("Equipment not found.");
}

const selectedCategory = "Test Equipment";
const categoryItems = filterByCategory(equipment, selectedCategory);

console.log(`\nFILTER BY CATEGORY: ${selectedCategory}`);
for (const item of categoryItems) {
    console.log(`${item.id} — ${item.name}`);
}

const summary = generateSummary(equipment);

console.log("\nINVENTORY SUMMARY");
console.log(`Number of equipment types: ${summary.equipmentTypes}`);
console.log(`Total units owned: ${summary.totalOwned}`);
console.log(`Total units currently available: ${summary.totalAvailable}`);
console.log(`Total units currently borrowed: ${summary.totalBorrowed}`);
console.log(`Equipment types requiring attention: ${summary.attentionCount}`);

const conditionCounts = countConditions(equipment);

console.log("\nEQUIPMENT CONDITION COUNTS");
console.log(`Good: ${conditionCounts.Good}`);
console.log(`For Repair: ${conditionCounts["For Repair"]}`);
console.log(`Damaged: ${conditionCounts.Damaged}`);

console.log("\nBORROW EQUIPMENT TEST");
const borrowTarget = findById(equipment, "EQ001");
console.log(borrowEquipment(borrowTarget, 2));
console.log(`EQ001 available after transaction: ${availableQuantity(borrowTarget)}`);
