export interface RandomUsers {
    id: string;
    name: string;
    image: string;
}

// Layout include types
export interface MenuItemsTypes {
    iconString: string, 
    colorString: string, 
    sizeString: string
}

export interface MenuItemFollowCompTypes {
    user: RandomUsers
}