interface IItem {
    dropName: string,
    //dropPhoto: string, //!need to add to backend and DB
    generalName: string,
    monster: string[],
    dropRate: number,
    minWorldRank: number,
    rarity: string, //may need to update this on backend/db
}

export default IItem;