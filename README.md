# Installing  Selenium with Cucumber using Maven.

Using this repository you can setup Selenium with Cucumber.

Following are the two ways to setup Selenium with Cucumber


## Installing Cucumber using Jar files 
 
 1. Install eclipse

 2. Create a Java Project in Eclipse

 3. Download Selenium Webdriver Jar files and Cucumber Jar files

    ```
     selenium-java-3.8.1
     cobertura-2.0.2.jar
     cucumber-core-1.2.5.jar
     cucumber-java-1.2.5.jar
     cucumber-junit-1.2.5.jar
     cucumber-jvm-deps-1.0.5.jar
     cucumber-reporting-3.13.0.jar
     gherkin-2.12.2.jar
     junit-4.12.jar
     mockito-all-1.10.19.jar
    ```
    
  4. Add JAR files to your Project

      ``` Right click on Project Name’ > Build Path > Configure Build Path > Java Build Path > Libraries > Add External JARs ```

  5. Refresh the Project in Eclipse

  6. Create 2  Packages `Runner` code  and `stepDefintion` under src folder.

  7. Create a folder 'Feature' in the Project .All the feature files will be saved in this folder.

  8. Create a new class `SeleniumTest` inside stepdefinition Package

  9. Create a new `TestRunner` class inside Runner Package
```
    @RunWith(Cucumber.class)
    @CucumberOptions(
		features = "Feature"
		,glue={"stepdefinition"}
		)
    
   ```
  10. Create a feature file `test.feature` inside Feature folder 
 
  11.Now write your Cucumber code inside the Feature folder and its related step definition inside the `SeleniumTest.java` and      you are all set to execute the Cucumber scripts
 
  12.Execute the `TestRunner.java` class as a JUnit Test.
    
 
 ## Installing Cucumber using Maven
 
 1.Create a Maven Project in Eclipse
   
 2.A pom.xml file will be created in the Maven Project u created. Add dependancy for Selenium,Cucumber and JUnit. Refer https://mvnrepository.com/ for the dependancies to be added. The dependancy for Selenium would look like this 
 
  ```<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>3.7.1</version>
</dependency>
```
3.Update the Project after adding dependancy  ```Right Click Project -> Maven -> Update Project```
 
4.Add 3 new packages  `feature` , `runner` and `stepdefinitions` inside `src/test/java`
  
5.Create a feature file `test.feature` inside feature.
  
6.Create a new class `SeleniumTest` inside stepdefinition Package.
  
7.Create a new `TestRunner` class inside runner Package.
 
```@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/test/java/features",
			glue = "stepdefinition",
			plugin = {
					  "pretty",
					  "html:target/cucumber",
		      }
			)
```
8.You are all set to write and execute Cucumber Scripts.
  
9.Write your code in feature file and its respective code in stepdefinition.
  
10.Execute the testrunner.java class as JUnit test to execute the tests.
