import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Donation } from "../entity/Donation";
import { Auth } from "../entity/Auth";

export async function save(request: Request, response: Response) {
  const storeRepository = getRepository(Donation);

  const savedStore = await storeRepository.save(request.body);

  return response.status(200).json(savedStore);
}

export async function getAll(request: Request, response: Response) {
  const storeRepository = getRepository(Donation);

  const allStores = await storeRepository.find();

  return response.json(allStores);
}

export async function saveAuth(request: Request, response: Response) {
  const storeRepository = getRepository(Auth);

  console.log(request.body)

  const savedStore = await storeRepository.save(request.body);

  return response.status(200).json(savedStore);
}

export async function getAllAuth(request: Request, response: Response) {
  const storeRepository = getRepository(Auth);
  
  console.log(request.body) 

  const allStores = await storeRepository.find();

  return response.json(allStores);
}
