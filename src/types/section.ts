export interface ISection {
  _id: string;
  name: string;
  academicYear: string;
  idSpecialite: IdSpecialite;
  __v: number;
}
export interface IdSpecialite {
  _id: string;
  name: string;
  abbreviation: string;
  idFiliere: IdFiliere;
  __v: number;
}
export interface IdFiliere {
  _id: string;
  name: string;
  abbreviation: string;
  __v: number;
}
