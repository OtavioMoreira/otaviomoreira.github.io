const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      enableSite: true,
      title: 'Dealer Marketing Center',
      date: '01 de Março de 2023',
      languages: ['vuejs', 'laravel', 'codeigniter', 'docker', 'portainer', 'mysql'],
      description: `A DMC(Dealer Marketing Center) foi um projeto tive a oportunidade de realizar desde o levantamento de requisitos, criação da estrutura do banco de dados, 
      desenvolvimento da arquitetura de infraestrutura, criação da API Rest, até o front-end. Não fui somente o braço técnico que criou e projetou, 
      como também entendi a necessidade de uma ferramenta dessas no mercado de marketing automotivo, e motivei a diretoria a investir nesse projeto, 
      que hoje se tornou o carro chefe da empresa. Essa ferramenta se trata de uma inteligência de marketing para guiar os concessionários 
      para o melhor caminho no mundo digital.`,
      imgSrc: 'assets/projects/dmcImage.png',
      videoSrc: 'https://streamable.com/e/8rxamt',
      linkedin: '-',
      repository: '-',
      site: 'https://dmc.leadforce.com.br'
      },
      {
        id: 2,
        type: 2,
        enableSite: true,
        title: 'Auto leads',
        date: '01 de Outubro de 2022',
        languages: ['react', 'laravel', 'docker', 'portainer', 'mysql'],
        description: `O Auto Leads é um gerenciador de estoque para seminovos, sua função principal é centralizar os estoques dos clientes em um único lugar,
        e fornecer a possibilidade de publicar seus anuncios em diversos portais de seminovos com maior agilidade. Tive a oportunidade de projetar o produto 
        e ajudar a mante-lo, trabalhei prestando manutenção no projeto e se responsabilizando por toda sua infraestrutura junto a outro desenvolvedor. 
        Nesse projeto eu implantei a primeira rotina de deploy automizado, utilizamos o gitlab registry, gitlab runner e o portainer.`,
        imgSrc: 'assets/projects/autoleadsImage.png',
        videoSrc: 'https://streamable.com/e/wwga12',
        linkedin: '-',
        repository: '-',
        site: 'https://app.autoleads.com.br'
      },
      {
        id: 3,
        type: 2,
        enableSite: true,
        title: 'Omnitalks',
        date: '01 de Janeiro de 2023',
        languages: ['react', 'laravel', 'docker', 'mysql'],
        description: `O Omnitalks é uma ferramente Omnichannel, responsável pela comunicação os leads por qualquer meio de contato. Inicilamente ela foi 
        idealizada para ser uma ferramente de whatsapp com multiplos brokers (fornececedores da API Oficial do Whatsapp), porém após analise de mercado e da 
        capacidade do próprio produto, ampliamos para comunicações com Facebook Messenger, Instagram Direct e um Chat robo integrado. Eu participei de toda a criação
        do projeto e depois ajudei a mante-lo por um tempo determinado, posteriormente fiquei responsável pela infraestrutura, arquitetura e definições de regras de negócio.`,
        imgSrc: 'assets/projects/omnitalksImage.png',
        videoSrc: 'https://streamable.com/e/i24zz2',
        linkedin: '-',
        repository: '-',
        site: 'https://app.omnitalks.com.br'
      },
      {
        id: 4,
        type: 1,
        enableSite: true,
        title: 'ACI Montenegro',
        date: '01 de Fevereiro de 2023',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `O website da ACI foi um projeto terceirizado com um agência parceira, comparado a projetos convencionais, 
        foi desenvolvido junto ao site um micro sistema de cadastro e gerenciamento de vagas de trabalho. Um projeto bem interessante 
        que ajuda diversas pessoas a se recolocarem no mercado de trabalho.`,
        imgSrc: 'assets/projects/aciImage.png',
        videoSrc: 'https://streamable.com/e/3pdraq',
        linkedin: '-',
        repository: '-',
        site: 'http://www.acimontenegro.com.br/'
      },
      {
        id: 5,
        type: 1,
        enableSite: true,
        title: 'Raetec',
        date: '01 de Maio de 2022',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `O website da Raetec foi um projeto convencional, esses projetos passam por um orçamento com base em um layout pré aprovado.
        Com base nesse orçamento são feitas as criações de delas e painel administrativo que faz o gerenciamento do conteúdo.`,
        imgSrc: 'assets/projects/raetecImage.png',
        videoSrc: 'https://streamable.com/e/6zydsi',
        linkedin: '-',
        repository: '-',
        site: 'https://www.raetec.com.br/'
      },
      {
        id: 6,
        type: 1,
        enableSite: true,
        title: 'Kappão',
        date: '01 de Agosto de 2021',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `O website da Kappão foi um projeto convencional, esses projetos passam por um orçamento com base em um layout pré aprovado.
        Com base nesse orçamento são feitas as criações de delas e painel administrativo que faz o gerenciamento do conteúdo.`,
        imgSrc: 'assets/projects/kappaoImage.png',
        videoSrc: 'https://streamable.com/e/nxlb6n',
        linkedin: '-',
        repository: '-',
        site: 'https://www.kappao.com.br/'
      },
      {
        id: 7,
        type: 1,
        enableSite: true,
        title: 'Agrogen',
        date: '01 de Agosto de 2021',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `O website da Kappão foi um projeto convencional, esses projetos passam por um orçamento com base em um layout pré aprovado.
        Com base nesse orçamento são feitas as criações de delas e painel administrativo que faz o gerenciamento do conteúdo.`,
        imgSrc: 'assets/projects/agrogenImage.png',
        videoSrc: 'https://streamable.com/e/vtpy7u',
        linkedin: '-',
        repository: '-',
        site: 'http://www.sipat-agrogen.com.br/'
      },
      {
        id: 8,
        type: 1,
        enableSite: true,
        title: 'Technow',
        date: '01 de Fevereiro de 2023',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `O website da Technow foi um projeto convencional, esses projetos passam por um orçamento com base em um layout pré aprovado.
        Com base nesse orçamento são feitas as criações de delas e painel administrativo que faz o gerenciamento do conteúdo.`,
        imgSrc: 'assets/projects/technowImage.png',
        videoSrc: 'https://streamable.com/e/kl8p2l',
        linkedin: '-',
        repository: '-',
        site: 'https://technowdados.com.br/'
      }
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img width="489" height="310" src="${imgSrc}">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img width="30" class="default-color-svg" src="assets/languages/${language}.svg" alt="${language}">`)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderFrontSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards-frontend');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      name: 'React.js',
      src: 'react'
    },
    {
      name: 'Vue.js',
      src: 'vuejs'
    },
    {
      name: 'Next.js',
      src: 'nextjs'
    },
    {
      name: 'Material UI',
      src: 'materialui'
    },
    {
      name: 'Tailwind CSS',
      src: 'tailwindcss'
    }
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img class="default-color-svg" src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const renderbackSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards-backend');

  const skills = [
    {
      name: 'PHP',
      src: 'php'
    },
    {
      name: 'Laravel',
      src: 'laravel'
    },
    {
      name: 'Codeigniter',
      src: 'codeigniter'
    },
    {
      name: 'APT Rest',
      src: 'apirest'
    },
    {
      name: 'Docker',
      src: 'docker'
    },
    {
      name: 'Aws',
      src: 'aws'
    },
    {
      name: 'Portainer',
      src: 'portainer'
    },
    {
      name: 'Grocery Crud',
      src: 'grocerycrud'
    },
    {
      name: 'Mysql',
      src: 'mysql'
    },
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img class="default-color-svg" src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, videoSrc, enableSite = false, enableRepository = false, enableLinkedin = false, imgSrc = null }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkProject.setAttribute('enable', enableSite)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkRepository.setAttribute('enable', enableRepository)
  modalLinkLinkedin.setAttribute('href', linkedin)
  modalLinkLinkedin.setAttribute('enable', enableLinkedin)
  if(videoSrc != null) {
    iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')
  }else if(imgSrc != null) {
    iframe.hide();

  }else {
    iframe.hide();
  }

  console.log('addData', addData)
}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderFrontSkillsSection();
renderbackSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();