"use script";

const template = document.getElementById('template-skills');
const selects = [menuSkill1, menuSkill2, menuSkill3, menuSkill4, menuSkill5, menuSkill6];

selects.forEach(select => {
  const clone = template.content.cloneNode(true); 
  select.appendChild(clone);
});

let rangedValue = document.querySelector("#menu-ranged");

let meleeValue = document.querySelector("#menu-melee");

let skill1Value = document.querySelector("#menuSkill1");

let skill2Value = document.querySelector("#menuSkill2");

let skill3Value = document.querySelector("#menuSkill3");

let skill4Value = document.querySelector("#menuSkill4");

let skill5Value = document.querySelector("#menuSkill5");

let skill6Value = document.querySelector("#menuSkill6");

let skillTotalValue = 0;

let skillTotalValueInGame = 0;

// for(let i = 0; i < selects.length; i++) {
//   skillTotalValue += document.querySelector(`#menuSkill${i + 1}`);
//   console.log(skillTotalValue);
// }


let calcButton = document.querySelector("#calc-button");

calcButton.addEventListener("click", function() {
  skillTotalValue = Math.round((100 + Number(rangedValue.value) + Number(meleeValue.value) + Number(skill1Value.value) + Number(skill2Value.value) + Number(skill3Value.value) + Number(skill4Value.value) + Number(skill5Value.value) + Number(skill6Value.value)) * 100) / 100;
  skillTotalValueInGame =  Math.trunc(skillTotalValue);


  let resultIngame = document.querySelector(".result-ingame");
  resultIngame.textContent = skillTotalValueInGame;

  let resultDetail = document.querySelector(".result-detail");
  resultDetail.textContent = skillTotalValue;
  
  // document.querySelector("#result-value").textContent = "aaa";
  // a.innerHTML = skillTotalValueInGame;

  console.log(skillTotalValue);
  console.log(skillTotalValueInGame);
});

