interface IUser {
  matricule: string;
  prenom: string;
  nom: string;
  birthday: Date;
  email: string;
  section: string;
  group: string;
}

export const user: IUser = {
  matricule: "202039053284",
  prenom: "Nada",
  nom: "Nagoudi",
  birthday: new Date(),
  email: "nagoudinada@gmail.com",
  section: "",
  group: "",
};

interface IAnnoncement {
  id: number;
  title: string;
  description: string;
  date: Date;
}

export const announcement: IAnnoncement = {
  id: 1,
  title: "Cours developpement web",
  description:
    "ghoudwa kayen cours mea section B kima la dernière fois le prof 9al pendant 6 semaine ndirou haka ( 9h40 salle 113)",
  date: new Date(),
};

export interface IHomework {
  name: string;
  description: string;
  deadline: Date;
}

export const homework: IHomework = {
  name: "Cours developpement web",
  description: "Forem ipsum dolor sit amet, consectetur adipiscing elit.",
  deadline: new Date("2023-05-02"),
};
export const homework2: IHomework = {
  name: "Cours developpement web",
  description:
    "Design an efficient algorithm to find the shortest path between two nodes in a weighted graph",
  deadline: new Date("2023-05-05"),
};
export const homework3: IHomework = {
  name: "Cours developpement web",
  description:
    "Make a schema for a social media platform that supports user profiles, posts, comments, and likes. You will also need to write SQL queries to retrieve specific data from the database.",
  deadline: new Date("2023-05-25"),
};

export enum OpportunityType {
  Bootcamp = "Bootcamp",
  Training = "Training",
  Competition = "Competition",
}

export interface IOpportunity {
  title: string;
  type: OpportunityType;
  organisation: string;
  description: string;
  link: string;
  urlOpportunityCover: string;
  urlClubCover: string;
}

export const opportunity: IOpportunity = {
  title: "Web it up Bootcamp",
  type: OpportunityType.Bootcamp,
  organisation: "Gdg Algiers",
  description:
    "With regular courses covering the latest and greatest fundamentals of building your own websites, you'll surely be left craving for more.",
  link: "",
  urlOpportunityCover: "",
  urlClubCover: "",
};
