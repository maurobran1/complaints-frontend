export interface Complaint {
    _id?: string;
    typeID?: string;
    type?: string;
    stateID?: string;
    state?: string;
    plate?: string;
    location?: {
        coordinates?: Coordinates,
        address?: string;
    };
    date?: Date;
    imagePaths?: string[];
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Coordinates {
    lat?: number;
    lng?: number;
}