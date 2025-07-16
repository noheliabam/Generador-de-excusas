window.onload = () => {
  const who = [
    'An alien',
    'My imaginary friend',
    'The neighbor’s chicken',
    'A wizard',
    'A talking potato'
  ];
  const action = [
    'stole',
    'burned',
    'hid',
    'chewed on',
    'deleted'
  ];
  const what = [
    'my project',
    'the laptop charger',
    'my presentation',
    'the report',
    'my schedule'
  ];
  const when = [
    'right before class',
    'during breakfast',
    'while I was brushing my teeth',
    'as I was leaving the house',
    'when I opened the door'
  ];

  const excuse = `${who[rand(who)]} ${action[rand(action)]} ${what[rand(what)]} ${when[rand(when)]}.`;
  document.querySelector('#excuse').innerText = excuse;
};

function rand(arr) {
  return Math.floor(Math.random() * arr.length);
}

