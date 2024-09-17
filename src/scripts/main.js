import '../scss/main.scss';

window.onload = function () {
  let css =
    'padding: .5rem; background: #60A772; font: 1.6em/1 Arial; color: white;';
  console.log('%cready!', css);
  const dark = document.getElementById('dark');
  const light = document.getElementById('light');

  light.addEventListener('click', function () {
    document.body.setAttribute('data-theme', 'light');
    dark.classList.remove('active');
    this.classList.add('active');
  });
  dark.addEventListener('click', function () {
    document.body.setAttribute('data-theme', 'dark');
    light.classList.remove('active');
    this.classList.add('active');
  });
};
