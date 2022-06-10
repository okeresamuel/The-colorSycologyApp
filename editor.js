
const colorMeaning = [
  { 
    btn_color: "cp_red",
    btn_text: " Excitement",
    colorText: "Red",
    meaning: "Red, the color of blood and fire, is associated with meanings of love, passion, desire, heat, longing, lust, sexuality, sensitivity, romance, joy, strength, leadership, courage, vigor, willpower, rage, anger, danger, malice, wrath, stress, action, vibrance, radiance, and determination",
  },

  { 
    btn_color: "cp_pink",
    btn_text: "Love",
    colorText: "Pink",
    meaning: "Pink, a delicate color that means sweet, nice, playful, cute, romantic, charming, feminine, and tenderness, is associated with bubble gum, flowers, babies, little girls, cotton candy, and sweetness.",
  },

  {
    btn_color: "cp_orange",
    btn_text: "Success",
    colorText: "Orange",
    meaning: "Orange is the color of joy and creativity. Orange promotes a sense of general wellness and emotional energy that should be shared, such as compassion, passion, and warmth. Orange will help a person recover from disappointments, a wounded heart, or a blow to one’s pride.",
  },

  {
    btn_color: "cp_black",
    btn_text: "Power",
    colorText: "Black",
    meaning: "Black is associated with power, fear, mystery, strength, authority, elegance, formality, death, evil, and aggression, authority, rebellion, and sophistication. Black is required for all other colors to have depth and variation of hue.",
  },
  {
    btn_color: "cp_grey",
    btn_text: "Dignity",
    colorText: "Grey",
    meaning: "Gray is a cool, neutral, and balanced color. The color gray is an emotionless, moody color that is typically associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated.",
  },

  {
    btn_color: "cp_blue",
    btn_text: "Trust",
    colorText: "Blue",
    meaning: "Blue represents meanings of depth, trust, loyalty, sincerity, wisdom, confidence, stability, faith, heaven, and intelligence.",
  },
  {
    btn_color: "cp_Brown",
    btn_text: "Strength",
    colorText: "Brown",
    meaning: "The color brown is a warm color that stimulates the appetite. While it is sometimes considered dull, it also represents steadfastness, simplicity, friendliness, dependability, and health.",
  },
  {
    btn_color: "cp_green",
    btn_text: "Health",
    colorText: "Green",
    meaning: "Green, the color of life, renewal, nature, and energy, is associated with meanings of growth, harmony, freshness, safety, fertility, and environment. Green is also traditionally associated with money, finances, banking, ambition, greed, jealousy, and wall street.",
  },
  {
    btn_color: "cp_purple",
    btn_text: "Creativity",
    colorText: "Purple",
    meaning: "The color purple is often associated with royalty, nobility, luxury, power, and ambition. Purple also represents meanings of wealth, extravagance, creativity, wisdom, dignity, grandeur, devotion, peace, pride, mystery, independence, and magic.",
  },
  {
    btn_color: "cp_white",
    btn_text: "Peace",
    colorText: "White",
    meaning: "White, an inherently positive color, is associated with purity, virginity, innocence, light, goodness, heaven, safety, brilliance, illumination, understanding, cleanliness, faith, beginnings, sterility, spirituality, possibility, humility, sincerity, protection, softness, and perfection.",
  },
  {
    btn_color: "cp_yellow",
    btn_text: "Optimism",
    colorText: "Yellow",
    meaning: "Yellow, the color of sunshine, hope, and happiness, has conflicting associations. On one hand yellow stands for freshness, happiness, positivity, clarity, energy, optimism, enlightenment, remembrance, intellect, honor, loyalty, and joy, but on the other, it represents cowardice and deceit.",
  },
  {
    btn_color: "cp_Navy",
    btn_text: "Sincere",
    colorText: "Navy",
    meaning: "Navy conveys importance, confidence, power, and authority, as well as intelligence, stability, unity, and conservatism.",
  },
  {
    btn_color: "cp_Beige",
    btn_text: "Flexibilyty",
    colorText: "Beige",
    meaning: "Beige is dependable, conservative, and flexible. The color beige is neutral, calm, and relaxing",
  },
  {
    btn_color: "cp_Indigo",
    btn_text: "Devotion",
    colorText: "Indigo",
    meaning: " indigo is quite spiritual and mysterious in its symbolism. It's the color of devotion, justice, creativity, dignity, and wisdom. Indigo is used in various cultures and celebrations ",
  },
  {
    btn_color: "cp_Amber",
    btn_text: "Positivity",
    colorText: "Amber",
    meaning: "Amber is associated with energy. Its vibrance can promote feelings of happiness and inspire boldness. In color psychology, amber is thought to symbolize and promote vitality, confidence and safety.",
  },
  {
    btn_color: "cp_Burgundy",
    btn_text: "Burgundy",
    colorText: "Burgundy",
    meaning: " It is more sophisticated and serious than true red, symbolizing ambition, wealth, and power.",
  },
  {
    btn_color: "cp_silver",
    btn_text: "Grace",
    colorText: "Silver",
    meaning: "The color silver is associated with meanings of industrial, sleek, high-tech, and modern, as well as ornate, glamourous, graceful, sophisticated, and elegant.",
  },
  {
    btn_color: "cp_Teal",
    btn_text: "Communication",
    colorText: "Teal",
    meaning: "Teal is a bluish-green color symbolizing calmness, serenity, and strength. The color is known for its elegance and sophistication",
  },
  {
    btn_color: "cp_Violet",
    btn_text: "Luxury",
    colorText: "Violet",
    meaning: "it symbolizes nobility, spirituality, ceremony, mystery, wisdom, enlightenment, arrogance, mourning.",
  },
  {
    btn_color: "cp_Torquoise",
    btn_text: "Friendship",
    colorText: "Torquoise",
    meaning: "The color turquoise is associated with meanings of refreshing, feminine, calming, sophisticated, energy, wisdom, serenity, wholeness, creativity, emotional balance, good luck, spiritual grounding, friendship, love, joy, tranquility, patience, intuition, and loyalty.",
  },
];



let colorBox = document.querySelector("#colorBox");
let colorName = document.querySelector(".colorName");
let  colorInfo = document.querySelector(".colorInfo")
let buttonInfo = document.querySelector("#buttonInfo")
for (let result of colorMeaning){
  let btn = document.createElement("button");
 let {colorText} = result
 let  {meaning} = result
 let {btn_text} = result
 let {btn_color} = result
 btn.classList.add("Stylebtn");
  btn.addEventListener("mouseover", () => {
    btn.classList.add("Scale");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("Scale");
  });
 btn.innerHTML = btn_text;
 btn.classList.add(btn_color);
 colorBox.append(btn);

function reactivate(){
  colorName.innerHTML = colorText;
  colorInfo.innerHTML = meaning;
  buttonInfo.style.background="white"

}
btn.addEventListener("click", reactivate)

  // animation function 
  function call() {
    let anim = anime({
      targets: "#buttonInfo",
      delay: 200,
      duration: 1000,
      opacity: [0, 1],
      elasticity: 1000,
      translateX: ["-50px", "0px"],
    });
  }
  btn.addEventListener("click", call);
  }
  window.addEventListener("load", ()=>{
   buttonInfo.style.background="url('https://imageio.forbes.com/blogs-images/amymorin/files/2014/07/670px-plutchik-wheel-svg_.png?format=png&width=1200') no-repeat center"
  buttonInfo.style.backgroundColor="#fff"
  buttonInfo.style. backgroundSize="contain"
  })