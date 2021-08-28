interface IItem {
    dropName: string,
    photo: string,
    generalName: string,
    monster: string[],
    dropRate: number,
    minWorldRank: number,
    rarity: string, //may need to update this on backend/db
}

export default IItem;