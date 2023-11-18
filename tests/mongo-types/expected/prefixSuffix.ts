// This file was auto-generated by prisma-generator-typescript-interfaces

export type Gender = "Male" | "Female" | "Other";

export type PhotoType = "Selfie" | "Profile" | "Tagged";

export interface Person {
  id: number;
  name: string;
  gender: Gender;
  addressId: number;
  address?: Address;
  photos: typePhotoType[];
  tags: typeTagType | null;
}

export interface Address {
  id: number;
  addressText: string;
  people?: Person[];
}

export interface typePhotoType {
  height: number;
  Width: number;
  url: string;
  type: PhotoType;
}

export interface typeTagType {
  id: number;
  name: string;
}