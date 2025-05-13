
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function testRegistration() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');
        await driver.findElement(By.id('username')).sendKeys('testUser');
        await driver.findElement(By.id('password')).sendKeys('testPassword123');
        await driver.findElement(By.id('registerButton')).click();
        
        // Wait for the result message to appear
        await driver.wait(until.elementLocated(By.id('resultMessage')), 10000);
        let result = await driver.findElement(By.id('resultMessage')).getText();
        
        assert.strictEqual(result, 'Registration successful!', 'Registration did not succeed as expected.');
    } finally {
        await driver.quit();
    }
}

testRegistration();
