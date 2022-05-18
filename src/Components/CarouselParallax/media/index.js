import media1 from "./admin-wallpaper.jpg";
import media2 from "./chefs-wallpaper.jpg";
import media3 from "./ewee-wallpaper.jpg";
import media4 from "./it-wallpaper.jpg";
import media5 from "./ewee-wallpaper.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
