import {test, expect} from '@playwright/test'
import * as petData  from './constance/global_constance';

test('Get all pets by status @Get @GetPetByStatus' , async({request}) =>{
    //console.log(request)
    const allPetsbyStatus = await request.get(`/v2/pet/findByStatus?status=${petData.PetStatus_Available}`);
    expect(allPetsbyStatus.ok()).toBeTruthy();
    const data = await allPetsbyStatus.json();
    console.log(data);
    //console.log("Ruby" + Math.floor(100000 + Math.random() * 900000).toString())
})

test('Get pet by ID @Get @GetPetById' , async({request}) =>{
    //console.log(request)
    const allPets = await request.get(`v2/pet/${petData.petID}`);
    //expect(allPets.ok()).toBeTruthy();
    expect(allPets.status()).toBe(200);
    const receivedPetdata = await allPets.json();
    console.log(receivedPetdata.id);
    expect(receivedPetdata.id.toString()).toEqual(`${petData.petID}`);
})