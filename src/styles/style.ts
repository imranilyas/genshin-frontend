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
    static imageAll = "https://i2.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/06/genshin-impact-open-world-screenshot.jpg?resize=1170%2C700&ssl=1";
    static setImage = () => {
        if(Dark.darkMode) {
            Dark.imageAll = "https://www.gameinformer.com/sites/default/files/styles/full/public/2021/07/09/a19505fe/genshin_impact_4.jpg"
        }
        else {
            Dark.imageAll = "https://i2.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/06/genshin-impact-open-world-screenshot.jpg?resize=1170%2C700&ssl=1";
        }
    } 
}