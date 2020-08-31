import { sequelize } from '../models/sequelize';
import CatModel from '../models/cat.model';
import { CatCreationInput } from '../types/cat.type';

class CatService {
  static getCats() {
    return CatModel.findAll();
  }

  static createCat({ name, color, categoryId }: CatCreationInput) {
    return sequelize.transaction((transaction) => CatModel.create({
      name,
      color,
      categoryId,
    }, { transaction }));
  }
}

export default CatService;
