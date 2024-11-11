import {test, expect} from '@playwright/test'
import * as petData  from './constance/global_constance';


test('Add a new pet to the store @Post @CreatePet', async ({ request }) => {
    const newPet = await request.post(`v2/pet`, {
      data: {
        "id": Math.floor(100 + Math.random() * 900000), //generate a random number as PetID
        "name": "Ruby" + Math.floor(100 + Math.random() * 900000).toString(), ////generate a random name as PetName
        "status": petData.PetStatus_Available,
      }
    });
    expect(newPet.status()).toBe(200);
    expect(newPet.ok()).toBeTruthy();
    const data = await newPet.json();
    console.log("New pet is created with name "+ data.name +" with Id: "+ data.id);
  });

test('Update Pet details in the store @Post @UpdatePet', async ({ request }) => {
    console.log(petData.petID)
    const updatePet = await request.post(`v2/pet/${petData.petID}`, {
        data: {
          "name": petData.petNewName,
          "status": petData.PetStatus_Sold,
        }
    });
    expect(updatePet.status()).toBe(200);
    expect(updatePet.ok()).toBeTruthy();
    const data = await updatePet.json();
    console.log(data.id.toString());
    expect(data.id.toString()).toEqual(petData.petID);
    console.log("Pet details are updated with name "+ petData.petNewName +" for PetId: "+ petData.petID);
  });