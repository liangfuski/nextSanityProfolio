interface SanityBody {
    _createdAt: string;
    _rev: string;
    _id: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface TopSkills extends SanityBody {
    _type: "topSkills",
    skills: Skill[]
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    shouldCompanyImageRound: Boolean;
    projectClientImage: Image;
    shouldClientImageRound: Boolean;
    projectDescription: string;
    dateStarted: date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}


export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image : Images ;
    linkToBuild: string ;
    summary: string ;
    technologies: Technology[];
}



export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}

