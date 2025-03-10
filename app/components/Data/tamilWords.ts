interface TamilWord {
    id: number;
    word: string;
    meaning: string[];
    languages: string;
  }
  
  const tamilWords: TamilWord[] = [
    {
      id: 1,
      word: "புத்தகம்",
      meaning: ["நூல்", "கல்வி"],
      languages: "தமிழ்"
    },
    {
      id: 2,
      word: "மரம்",
      meaning: ["விருட்சம்", "தாவரம்"],
      languages: "தமிழ்"
    },
    {
      id: 3,
      word: "நீர்",
      meaning: ["தண்ணீர்", "ஜலம்"],
      languages: "தமிழ்"
    },
    {
      id: 4,
      word: "நிலா",
      meaning: ["சந்திரன்", "மதி"],
      languages: "தமிழ்"
    },
    {
      id: 5,
      word: "காற்று",
      meaning: ["வாயு", "சீற்றம்"],
      languages: "தமிழ்"
    },
    {
      id: 6,
      word: "சூரியன்",
      meaning: ["கதிரவன்", "ஆதவன்"],
      languages: "தமிழ்"
    }
  ];
  
  export default tamilWords;
  