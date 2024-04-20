export interface SocialLink {
    name: string;
    icon: any; // Update the type of `icon` based on the actual type of `faLinkedin`, `faTwitter`, etc.
    url: string;
}

export interface UserObject {
    name: string;
    designation: string;
    description: string;
    img: string;
    social: SocialLink[];
}


export interface AboutUs {
    skill: string;
    title: string;
    bio: {
        paragraphs: {
            text: {
                content: string;
                highlight: boolean;
            }[];
        }[];
    };
    totalProjectInThousand: string;
    experience: number;
    email: string;
    skills: Skill[];
}

export interface Skill {
    title: string;
    icon: string;
    description: string;
}