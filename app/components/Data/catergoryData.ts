export interface CategoryData {
    category: string;
    words: number;
    path:string;
}

export const categoryWords: CategoryData[] = [
    { category: "பழங்கள்", words: 25 , path:'/fruits.png'},
    { category: "பூக்கள்", words: 47,path:'/sakura.png' },
    { category: "பறவைகள்", words: 12,path:'/dove.png' },
    { category: "மீன்கள்", words: 33,path:'/clown-fish.png' },
    { category: "ஐவகை நிலம்", words: 64,path:'/landscape.png'},]
