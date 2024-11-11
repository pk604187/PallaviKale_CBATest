# PallaviKale_CBATest

I am working on API testing using Playwright. I am using "Pet" endpoints available on https://petstore.swagger.io/#/

In this test suit, below Pet scenarios are covered.
1. Find pet by status -- Tags --> @Get @GetPetByStatus - completed 
2. Find pet by ID -- Tags --> @Get @GetPetById - completed 
3. Create a pet in the store -- Tags @Post @CreatePet - inprogress
4. update the pet in the store -- Tags @Post @UpdatePet - inprogress


To run the API test using Github Action Workflow, please follow below steps
1. Go to Actions tab or navigate to URL --> https://github.com/pk604187/PallaviKale_CBATest/actions
2. Click on "Playwright-test-job" --> "Run Workflow" --> "Select branch API_Testing_PallaviKale-CBATest" --> "give the tags mentioned above to run specific test cases" --> "Click on Run Workflow"
e.g to run the test case for Find pet by status - use tag @GetPetByStatus 
to run all the get request test cases - use @Get
3. With Above steps, you will see new workflow request is submitted (if not visible click on Playwright-test-job again to get it refreshed)
4. Click on newly created workflow, check status for each step
5. To view the test report, click on "Download Playwright-report" in artifact section


In the API test cases, 2 checks are validated 
1. Check the HTTP request status is "OK"
2. Check the HTTP request's return code as "200"


Please note, I am keeping the test data in Constants file, if you are executing GetPetByID scenarios then need to update available PetID in the test data since Pet details will not be available after sometime (don't know it gets deleted on portal)

//I am still working on no 3 and 4 scenarios, due to heavy workload, I am planning to complete this by 12th Nov
