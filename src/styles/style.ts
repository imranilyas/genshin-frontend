// export class dark {
//     static darkmode = false;
// }

// if (dark.darkmode === true) {
//     const color = () => {

//     }
// }

// export default color;
export class Dark {
    static darkMode: boolean = false;
    // Light Images as default
    static imageAll = "https://i2.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/06/genshin-impact-open-world-screenshot.jpg?resize=1170%2C700&ssl=1";
    static imageAdd = "https://preview.redd.it/sok7elhncww61.jpg?width=1902&format=pjpg&auto=webp&s=c52a0105b388e68419f9e248a18faa719b2c2159";
    static imageEdit = "https://i.imgur.com/PHkCmAQ.jpg";
    static imageView = "https://pbs.twimg.com/media/Et9411BXEAUq8P5.jpg";

    static setImage = () => {
        if(Dark.darkMode) {
            // Dark Images
            Dark.imageAll = "https://www.gameinformer.com/sites/default/files/styles/full/public/2021/07/09/a19505fe/genshin_impact_4.jpg";
            Dark.imageAdd = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2356fce-672b-4e4d-8a30-df8f42ffbd6d/de7v6so-18c5aca5-4e29-47d7-9ca0-c10dab9b1295.jpg/v1/fill/w_1280,h_720,q_75,strp/genshin_impact_background_by_dereksedits_de7v6so-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYzIzNTZmY2UtNjcyYi00ZTRkLThhMzAtZGY4ZjQyZmZiZDZkXC9kZTd2NnNvLTE4YzVhY2E1LTRlMjktNDdkNy05Y2EwLWMxMGRhYjliMTI5NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.99LojMcRrNwjzEGrdUj0TCG1CsrpybeJ3W_BIvVs7MQ";
        }
        else {
            // Light Images
            Dark.imageAll = "https://i2.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/06/genshin-impact-open-world-screenshot.jpg?resize=1170%2C700&ssl=1";
            Dark.imageAdd = "https://preview.redd.it/sok7elhncww61.jpg?width=1902&format=pjpg&auto=webp&s=c52a0105b388e68419f9e248a18faa719b2c2159";
        }
    } 
}