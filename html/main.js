const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [
  {
    fullName: 'Arm prototype 1',
    description: `Used to do some surgery on arms, for example, explanation of replacement of dead tissues`,
    imageURL: '../img/arm rashodnik 1.jpg'
  },

  {
    fullName: 'Arm prototype 2',
    description: `Used to do some vessels' work understanding`,
    imageURL: '../img/arm rashodnik 2.jpg'
  },

  {
    fullName: 'Buttock for intramuscular injection',
    description: ``,
    imageURL: '../img/yagoditsa.jpg'
  },

  {
    fullName: 'Buttock for intramuscular injection',
    description: ``,
    imageURL: '../img/butt2.jpg'
  },

  {
    fullName: 'Arm prototype for intravein injection',
    description: ``,
    imageURL: '../img/ruka.jpg'
  },

  {
    fullName: 'Arm prototype for intravein injection',
    description: ``,
    imageURL: '../img/ruka2.jpg'
  },
  
  {
    fullName: 'Arm prototype for intraskin injection',
    description: ``,
    imageURL: '../img/vvarm.jpg'
  },

  {
    fullName: 'Arm prototype for intraskin injection',
    description: ``,
    imageURL: '../img/vvarm2.jpg'
  },

  {
    fullName: 'Surgery education prototype',
    description: ``,
    imageURL: '../img/kol1.jpg'
  },

  {
    fullName: 'Surgery education prototype',
    description: ``,
    imageURL: '../img/kol2.jpg'
  }];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.fullName.toLowerCase().includes(searchString) ||
            character.nationality.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        displayCharacters(hpCharacters);
    }catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.fullName}</h2>
                <img src="${character.imageURL}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();



