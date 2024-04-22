import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schemahema({
  name: { type: string, required: true, unique: true },
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
