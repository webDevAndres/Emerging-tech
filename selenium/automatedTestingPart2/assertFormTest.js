//require("chromedriver");

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    //.forBrowser('chrome')
    .build();
var Key = webdriver.Key;
var assert = require('assert');
var pageTitle = "";
var assertion = "";

//driver.get("http://joekanauss.info/wdv495/assertForm.html")
driver.get("http://localhost/wdv495/finished_homework/selenium/automatedTestingPart2/assertion_example.html")
.then(function(){

	//------------------------- INITIAL PAGE TITLE ASSERTION -------------------------
	driver.getTitle()
	.then(function(title) {
        assert(title =="WDV495 Emerg Tech - Assertion Example"); //-------change inbetween "" to make assertion fail
        console.log("\n\nPage Title Check(1)\nASSERTION: Expected Title - 'WDV495 Emerg Tech - Assertion Example'\nRESULT: PASS\n");
    })
    .catch(function(title){
        console.log("Page Title Check(1)\nASSERTION: Expected Title - 'WDV495 Emerg Tech - Assertion Example'\nRESULT: FAIL\n");
    }) 
    
    //------------------------- 1st INPUT ('w') -------------------------
    .then(function(){
		var numberInput = driver.findElement(By.id("numberInput"));
        numberInput.sendKeys("w")
    })
    
    //------------------------- 1st ERROR MESSAGE INPUT('w') -------------------------
    .then(function(){
        var errorMessage = driver.findElement(By.id("error")).getText()
        .then(function(errorMessage){
            assert.strictEqual(errorMessage,"NOT A NUMBER"); //-------change inbetween "" to make assertion fail
            console.log("Number Input Error Message Check(1)\nASSERTION: Input 'w' - Expected - 'NOT A NUMBER' \nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Number Input Error Message Check(1)\nASSERTION: Input 'w' - Expected - 'NOT A NUMBER' \nRESULT: FAIL\n");
        })  
    })
    
    //------------------------- 2nd INPUT(200) -------------------------
    .then(function(){
		var numberInput = driver.findElement(By.id("numberInput"));
		numberInput.clear()
		numberInput.sendKeys(200)
	})

    //------------------------- 2nd ERROR MESSAGE INPUT(200) -------------------------
    .then(function(){
        var errorMessage = driver.findElement(By.id("error")).getText()
        .then(function(errorMessage){
            assert.strictEqual(errorMessage,"NUMBER OUT OF RANGE (0-100)"); //-------change inbetween "" to make assertion fail
            console.log("Number Input Error Message Check(2)\nASSERTION: Input '200' - Expected - 'NUMBER OUT OF RANGE (0-100)' \nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Number Input Error Message Check(2)\nASSERTION: Input '200' - Expected - 'NUMBER OUT OF RANGE (0-100)' \nRESULT: FAIL\n");
        })  
    })
  
    //------------------------- 3rd INPUT(-42) -------------------------
    .then(function(){
		var numberInput = driver.findElement(By.id("numberInput"));
        numberInput.clear()
        numberInput.sendKeys(-42)
    })
    
    //------------------------- 3rd ERROR MESSAGE INPUT(-42) -------------------------
    .then(function(){
       var errorMessage = driver.findElement(By.id("error")).getText()
        .then(function(errorMessage){
            assert.strictEqual(errorMessage,"NUMBER OUT OF RANGE (0-100)"); //-------change inbetween "" to make assertion fail
            console.log("Number Input Error Message Check(3)\nASSERTION: Input '-42' - Expected - 'NUMBER OUT OF RANGE (0-100)' \nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Number Input Error Message Check(3)\nASSERTION: Input '-42' - Expected - 'NUMBER OUT OF RANGE (0-100)' \nRESULT: FAIL\n");
        })  
	})

	//------------------------- 4th INPUT(50) -------------------------
    .then(function(){
		var numberInput = driver.findElement(By.id("numberInput"));
        numberInput.clear()
        numberInput.sendKeys(50)
    })
    
    //------------------------- 4th ERROR MESSAGE INPUT(50) -------------------------
    .then(function(){
        var errorMessage = driver.findElement(By.id("error")).getText()
        .then(function(errorMessage){
            assert.strictEqual(errorMessage,""); //-------change inbetween "" to make assertion fail
            console.log("Number Input Error Message Check(4)\nASSERTION: Input '50' - Expected - ''(empty) \nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Number Input Error Message Check(4)\nASSERTION: Input '50' - Expected - ''(empty) \nRESULT: FAIL\n");
        })  
	})

	//------------------------- 5th INPUT(0) -------------------------
    .then(function(){
		var numberInput = driver.findElement(By.id("numberInput"));
        numberInput.clear()
        numberInput.sendKeys(0)
    })
    
    //------------------------- 5th ERROR MESSAGE INPUT(0) -------------------------
    .then(function(){
        var errorMessage = driver.findElement(By.id("error")).getText()
        .then(function(errorMessage){
            assert.strictEqual(errorMessage,""); //-------change inbetween "" to make assertion fail
            console.log("Number Input Error Message Check(5)\nASSERTION: Input '0' - Expected - ''(empty) \nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Number Input Error Message Check(5)\nASSERTION: Input '0' - Expected - ''(empty) \nRESULT: FAIL \n");
        })  
	})

    //------------------------- LINK TO OTHER PAGE TEST-------------------------
    .then(function(){
        driver.sleep(3000);
        driver.findElement(By.id("linkTest")).click()
        .then(function(){
            pageTitle = driver.getTitle();
            return pageTitle;
        })
        
        //------------------------- LINK TO OTHER PAGE TEST -------------------------
        .then(function(pageTitle){
            assert(pageTitle == "DMACC PORTFOLIO DAY"); //-------change inbetween "" to make assertion fail
            console.log("Link Page Title Check(1)\nASSERTION: Expected Title - 'DMACC PORTFOLIO DAY'\nRESULT: PASS\n");
        })
        .catch(function(error){
            console.log("Link Page Title Check(1)\nASSERTION: Expected Title - 'DMACC PORTFOLIO DAY'\nRESULT: FAIL\n");
        })
        .then(function(pageTitle){
            driver.quit();
        })
	})
});

