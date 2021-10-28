// HotbarUses5e: ActorID="TKneSvd2Ofb4T9bn" ItemID="25LRZG0SIBVi27Rp"

const veshForms = {
  winter: { name: 'Veshgeimreadh', img: 'Galdrheim%20Assets/veshgeimreadh.jpg' },
  spring: { name: 'Veshearach', img: 'Galdrheim%20Assets/veshearach.jpg' },
  summer: { name: 'Veshsamradh', img: 'Galdrheim%20Assets/veshsamradh.jpg' },
  autumn: { name: 'Veshfomhar', img: 'Galdrheim%20Assets/Veshfomhar.png' }
};

const getPossibleForms = (forms, currentForm) => {
  let possibleForms;
  switch (currentForm) {
    case forms.winter.name:
      possibleForms = [forms.spring, forms.summer, forms.autumn];
      break
    case forms.spring.name:
      possibleForms = [forms.summer, forms.autumn, forms.winter];
    case forms.summer.name:
      possibleForms = [forms.autumn, forms.winter, forms.spring];
    case forms.autumn.name:
      possibleForms = [forms.winter, forms.spring, forms.summer];
    default:
      possibleForms = [forms.winter, forms.spring, forms.summer, forms.autumn];
  }

  return possibleForms;
}

const getNextForm = (forms, currentForm) => {
  const possibleForms = getPossibleForms(forms, currentForm);
  const randomNum = Math.floor((Math.random()*(possibleForms.length)))
  const nextForm = possibleForms[randomNum];
  return nextForm
}
const vesh = game.actors.get("TKneSvd2Ofb4T9bn")
const nextForm = getNextForm(veshForms, vesh.name)
vesh.update({name: nextForm.name, img: nextForm.img})
console.log(vesh.name)