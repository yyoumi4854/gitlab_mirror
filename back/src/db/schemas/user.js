import { Schema, model } from "mongoose";
import { EducationSchema } from "./education";
import { ProjectSchema } from "./project";
import { CertificateSchema } from "./certificate";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "설명이 아직 없습니다. 추가해 주세요.",
    },
    educations: [EducationSchema],
    projects: [ProjectSchema],
    certificates: [CertificateSchema],
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export { UserModel };
