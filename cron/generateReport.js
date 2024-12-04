const cron = require("node-cron");

const { expenses } = require("../routes/expenses");

const generateReport = () => {
    cron.schedule("*/1 * * * *", () => {
        const today = new Date().toISOString().split("T")[0];
        const todayExpenses = expenses.filter((exp) => exp.date === today);

        const totalSpentToday = todayExpenses.reduce((acc, exp) => acc + exp.amount, 0);

        console.log(`Daily Summary for ${today}: Total Spent = ${totalSpentToday}`);
    });
};

module.exports = generateReport;
