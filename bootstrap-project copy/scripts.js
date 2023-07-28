// Função para criar ProgressBar
function createProgressBar(element, startColor, endColor, endWidth, value) {
  return new ProgressBar.Circle(element, {
    color: startColor,
    strokeWidth: 9,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: true
    },
    from: { color: startColor, width: 1 },
    to: { color: endColor, width: endWidth },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      let roundedValue = Math.round(circle.value() * value);
      circle.setText(roundedValue === 0 ? '' : roundedValue);
    }
  });
}

const containerA = createProgressBar(circleA, '#b0c4de', '#4682b4', 4, 100);
const containerB = createProgressBar(circleB, '#b0c4de', '#4682b4', 4, 18547);
const containerC = createProgressBar(circleC, '#b0c4de', '#4682b4', 4, 18547);
const containerD = createProgressBar(circleD, '#b0c4de', '#4682b4', 4, 18547);

// Anima os ProgressBar
containerA.animate(1.0);
containerB.animate(1.0);
containerC.animate(1.0);
containerD.animate(1.0);

// Parallax
$('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
$('#apply-content').parallax({imageSrc: 'img/pattern.png'})

let navBtn = $('.nav-item');

let bannerSection = $('#carousel-area');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let teamSection = $('#team-area');
let portfolioSection = $('#project-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function() {
  
  let btnId = $(this).attr('id');
  
  if(btnId == 'about-menu') {
    scrollTo = aboutSection;
  } else if(btnId == 'services-menu') {
    scrollTo = servicesSection;
  } else if(btnId == 'team-menu') {
    scrollTo = teamSection;
  } else if(btnId == 'project-menu') {
    scrollTo = portfolioSection;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  } else {
    scrollTo = bannerSection;
  }
  
  $([document.documentElement, document.body]).animate({
    scrollTop: $(scrollTo).offset().top - 70
  }, 1500);});

// Filtro para a seção de portfólio
const portfolioFilterButtons = document.querySelectorAll('#filter-btn-box .btn');
const portfolioCards = document.querySelectorAll('.project-box');

portfolioFilterButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Remova a classe 'active' de todos os botões de filtro
    portfolioFilterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Adicione a classe 'active' ao botão clicado
    this.classList.add('active');

    // Obtenha o filtro selecionado
    const selectedFilter = this.getAttribute('data-filter');

    // Chame a função de filtro
    filterPortfolio(selectedFilter);
  });
});

// Função de filtro
function filterPortfolio(selectedFilter) {
  portfolioCards.forEach((card) => {
    const cardFilter = card.getAttribute('data-filter');

    // Verifica se o filtro selecionado é "all" ou se corresponde ao filtro do card
    const displayCard = selectedFilter === 'all' || selectedFilter === cardFilter;

    // Define o estilo de exibição do card de acordo com a variável displayCard
    card.style.display = displayCard ? 'block' : 'none';
  });
}



