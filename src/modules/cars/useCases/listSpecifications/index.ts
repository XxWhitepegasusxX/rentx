import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationUseCase(specificationsRepository)
export const listSpecificationsController = new ListSpecificationController(listSpecificationsUseCase)