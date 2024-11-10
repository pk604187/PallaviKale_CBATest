import {APIRequestContext, expect } from '@playwright/test';
import { request, } from 'https';

export const getPetByID = async(request : APIRequestContext, petID : string) =>{

    const allPets = await request.get(`v2/pet/${petID}`);
    //expect(allPets.ok()).toBeTruthy();
    expect(allPets.status()).toBe(200);
    const data = await allPets.json();
    console.log(data.id);
    expect(data.id).toEqual(`${petID}`);

}

export const getRandomID = async() => {

    return Math.floor(100000 + Math.random() * 900000)
}

export const getRandomName = async() => {

    return "Ruby" + Math.floor(100000 + Math.random() * 900000).toString
}