window.onload = () => {
  const who   = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action= ['ate',       'peed on',   'crushed',     'broke'];
  const what  = ['my homework','my phone', 'the car'];
  const when  = ['before the class','when I was sleeping',
                 'while I was exercising','during my lunch',
                 'while I was praying'];

  const excuse = `${who[rand(who)]} ${action[rand(action)]} ${what[rand(what)]} ${when[rand(when)]}`;
  document.querySelector('#excuse').innerText = excuse;
};

function rand(arr) {
  return Math.floor(Math.random() * arr.length);
}
