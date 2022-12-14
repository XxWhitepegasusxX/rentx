import { Specification } from "../entities/Specification";

export interface ICreateSpecificationDTO{
    name: string,
    description: string,
}

interface ISpecificationsRepository {
    findByName(name: string): Specification;
    create({name, description}: ICreateSpecificationDTO): void;
    list(): Specification[];
}
export { ISpecificationsRepository }