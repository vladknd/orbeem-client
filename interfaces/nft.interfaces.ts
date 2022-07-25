export interface INFT {
    name: string;
    description: string;
    image: string;

    tokenId: number;
    tokenURI: string;
    imageURI: string;

    level: number;
    power: number;
    durability: number;
    intelligence: number;

    price: string;
}

export interface INFTData {
    name: string;
    description: string;
    
    tokenId: number;
    itemId: number;
    tokenURI: string;
    image: string;

    owner: string;
    sold: boolean;
    price: string;

    level: number;

    basePower: number;
    baseDurability: number;
    baseIntelligence: number;

    power: number;
    durability: number;
    intelligence: number;
}