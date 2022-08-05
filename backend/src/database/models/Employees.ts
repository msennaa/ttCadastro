import { Model, DataTypes } from "sequelize";
import db from '.';

export default class employees extends Model {
  id!: number;
  name!: string;
  department!: string;
  salary!: number;
  cpf!: string;
  birthDate!: string;
}

employees.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'employees',
  timestamps: false,
  underscored: false,
})

