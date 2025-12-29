import { model, models, Schema } from "mongoose";
import { IStatisticDocument, IStatisticMethods, IStatisticModel } from "../interfaces/statistics.interface";

const StatisticSchema = new Schema<IStatisticDocument, IStatisticModel, IStatisticMethods>(
  {
    icon: {
      type: String,
      required: [true, "Icono es requerido"],
      trim: true,
      maxLength: [50, "Icono no puede exceder 50 caracteres"],
    },
    iconColor: {
      type: String,
    },
    iconBGColor: {
      type: String,
      required: [true, "IconBGcolor es requerido"],
      trim: true,
      validate: {
        validator: function (v: string) {
          return /^bg-/.test(v);
        },
        message: "IconBGColor debe comenzar con 'bg-'",
      },
    },
    value: {
      type: Number,
      required: [true, "El valor es requerido"],
      min: [0, "El valor no puede ser negativo"],
      max: [999999, "El valor no puede ser mayor a 999,999"],
      index: true,
    },
    secondaryValue: {
      type: Number,
      min: [0, "El valor secundario no puede ser negativo"],
      max: [999, "El valor secundario no puede ser mayor a 999"],
    },
    symbol: {
      type: String,
      enum: {
        values: ["+", "%", "/", "-", "×", "=", ""],
        message: "Símbolo no válido: {VALUE}",
      },
      default: "",
    },
    title: {
      type: String,
      required: [true, "El título es requerido"],
      trim: true,
      minLength: [3, "El título debe tener al menos 3 caracteres"],
      maxLength: [100, "El título no puede exceder 100 caracteres"],
      index: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: [500, "La descripción no puede exceder 500 caracteres"],
    },
    order: {
      type: Number,
      required: [true, "El orden es requerido"],
      min: [0, "El orden no puede ser negativo"],
      index: true,
      default: 0,
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "published", "archived"],
        message: "Estado no válido: {VALUE}",
      },
      default: "draft",
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "statistics",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

StatisticSchema.index({ isActive: 1, status: 1, order: 1 });
StatisticSchema.index({ title: "text" });

// Métodos de Instancia
StatisticSchema.methods.publish = async function () {
  this.status = "published";
  this.isActive = true;
  return await this.save();
};

StatisticSchema.methods.archive = async function () {
  this.status = "archived";
  this.isActive = false;
  return await this.save();
};

StatisticSchema.methods.toggleActive = async function () {
  this.isActive = !this.isActive;
  return await this.save();
};

StatisticSchema.methods.updateOrder = async function (newOrder: number) {
  this.order = newOrder;
  return await this.save();
};

// Métodos estáticos
StatisticSchema.statics.getActive = async function () {
  return this.find({ isActive: true, status: "published" })
    .sort({ order: 1, createdAt: -1 })
    .lean<IStatisticDocument[]>()
    .exec();
};

StatisticSchema.statics.getPublished = async function () {
  return this.find({ status: "published" }).sort({ order: 1, createdAt: -1 }).lean<IStatisticDocument[]>().exec();
};

StatisticSchema.statics.getByStatus = async function (status: "draft" | "published" | "archived") {
  return this.find({ status }).sort({ order: 1, createdAt: -1 }).lean<IStatisticDocument[]>().exec();
};

StatisticSchema.statics.reorder = async function (updates: Array<{ id: string; order: number }>) {
  const bulkOps = updates.map((update) => ({
    updateOne: {
      filter: { _id: update.id },
      update: { $set: { order: update.order } },
    },
  }));

  return this.bulkWrite(bulkOps);
};

// Virtuales
StatisticSchema.virtual("isVisible").get(function () {
  return this.status === "published" && this.isActive;
});

StatisticSchema.virtual("displayValue").get(function () {
  if (this.secondaryValue !== undefined && this.symbol === "/") {
    return `${this.value}${this.symbol}${this.secondaryValue}`;
  }

  if (this.symbol) {
    if (this.symbol === "+" || this.symbol === "-") {
      return `${this.value}${this.symbol}`;
    }
    if (this.symbol === "%") {
      return `${this.value}${this.symbol}`;
    }
    return `${this.value}${this.symbol}`;
  }
  return this.value.toString();
});

// Middlewares
StatisticSchema.pre("save", function (next) {
  if (this.secondaryValue !== undefined && this.symbol !== "/") {
    return next(new Error('Valor secundario solo es válido con el símbolo "/"'));
  }
  next();
});

StatisticSchema.pre("save", async function (next) {
  if (this.isNew && this.order === 0) {
    const count = await (this.constructor as IStatisticModel).countDocuments();
    this.order = count + 1;
  }
  next();
});

export const StatisticModel: IStatisticModel =
  (models.Statistic as IStatisticModel) || model<IStatisticDocument, IStatisticModel>("Statistic", StatisticSchema);
