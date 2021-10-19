// HotbarUses5e: ActorID="TKneSvd2Ofb4T9bn" ItemID="25LRZG0SIBVi27Rp"

const veshForms = {
  winter: 'Veshgeimreadh',
  spring: 'Veshearach',
  summer: 'Veshsamradh',
  autumn: 'Veshfomhar'
};

const getPossibleForms = (forms, currentForm) => {
  let possibleForms;
  switch (currentForm) {
    case forms.winter:
      possibleForms = [forms.spring, forms.summer, forms.autumn];
      break
    case forms.spring:
      possibleForms = [forms.summer, forms.autumn, forms.winter];
    case forms.summer:
      possibleForms = [forms.autumn, forms.winter, forms.spring];
    case forms.autumn:
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
vesh.update({name: nextForm})
console.log(vesh.name)