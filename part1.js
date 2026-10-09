function processOrder(order) {
    const subtotal = order.unitPrice * order.quantity;
    let discountRate = 0;

    if (order.quantity > order.availableStock) {
        return {
            processed: false,
            subtotal,
            discountRate,
            finalAmount: 0
        };
    }

    if (order.isMember && subtotal >= 2000) {
        discountRate = 0.10;
    } else if (!order.isMember && subtotal >= 5000) {
        discountRate = 0.05;
    }

    const discountAmount = subtotal * discountRate;
    const finalAmount = subtotal - discountAmount;

    return {
        processed: true,
        subtotal,
        discountRate,
        discountAmount,
        finalAmount
    };
}

const orders = [
    {
        productName: "Arduino Uno",
        unitPrice: 850,
        quantity: 1,
        isMember: false,
        availableStock: 10
    },
    {
        productName: "ESP32 Development Board",
        unitPrice: 1200,
        quantity: 2,
        isMember: true,
        availableStock: 10
    },
    {
        productName: "Sensor Kit",
        unitPrice: 1500,
        quantity: 4,
        isMember: false,
        availableStock: 10
    },
    {
        productName: "Raspberry Pi Kit",
        unitPrice: 2500,
        quantity: 6,
        isMember: true,
        availableStock: 4
    }
];

for (const order of orders) {
    const result = processOrder(order);

    console.log(`\nProduct: ${order.productName}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Membership: ${order.isMember ? "Member" : "Non-member"}`);
    console.log(`Subtotal: ₱${result.subtotal.toFixed(2)}`);

    if (!result.processed) {
        console.log(`Status: Cannot be processed — insufficient stock.`);
    } else {
        console.log(`Discount: ${(result.discountRate * 100).toFixed(0)}%`);
        console.log(`Final Amount: ₱${result.finalAmount.toFixed(2)}`);
        console.log(`Status: Processed`);
    }
}
