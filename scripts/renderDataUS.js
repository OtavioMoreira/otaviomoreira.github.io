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
      date: 'March 1st, 2023',
      languages: ['vuejs', 'laravel', 'codeigniter', 'docker', 'portainer', 'mysql'],
      description: `A DMC (Dealer Marketing Center) was a project I had the opportunity to carry out from requirements 
      gathering, database structure creation, infrastructure architecture development, REST API creation, to front-end 
      development. I wasn't just the technical arm that created and designed, but I also understood the need for such 
      a tool in the automotive marketing market, and motivated the management to invest in this project, which has now 
      become the flagship of the company. This tool is a marketing intelligence to guide dealerships through the best path 
      in the digital world.`,
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
        date: 'October 1st, 2022',
        languages: ['react', 'laravel', 'docker', 'portainer', 'mysql'],
        description: `The Auto Leads is an inventory manager for pre-owned vehicles. Its main function is to centralize clients' 
        inventories in one place and provide the possibility to publish their listings on various pre-owned vehicle portals more efficiently. 
        I had the opportunity to design the product and assist in maintaining it. I worked on providing maintenance to the project and was responsible 
        for its entire infrastructure alongside another developer. In this project, I implemented the first automated deployment routine. We utilized 
        GitLab Registry, GitLab Runner, and Portainer.`,
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
        date: 'January 1st, 2023',
        languages: ['react', 'laravel', 'docker', 'mysql'],
        description: `The Omnitalks is an Omnichannel tool responsible for communicating with leads through any contact channel. 
        Initially, it was conceived to be a WhatsApp tool with multiple brokers (providers of the Official WhatsApp API). However, 
        after market analysis and evaluation of the product's capabilities, we expanded it to communications with Facebook Messenger, 
        Instagram Direct, and an integrated chatbot. I participated in the entire project creation process and later assisted in maintaining 
        it for a specified period. Subsequently, I became responsible for the infrastructure, architecture, and business rule definitions.`,
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
        date: 'February 1st, 2023',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `The ACI website was an outsourced project with a partner agency. Compared to conventional projects, alongside the website, a micro system for 
        job listing and management was developed. It was a very interesting project that helps many people to reintegrate into the job market.`,
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
        date: 'May 1st, 2022',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `The Raetec website was a conventional project. These projects undergo budgeting based on a pre-approved layout. Based on this 
        budget, the designs are created along with an administrative panel that manages the content.`,
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
        date: 'August 1st, 2021',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `The Kappão website was a conventional project. These projects undergo budgeting based on a pre-approved layout. Based on this budget, 
        the designs are created along with an administrative panel that manages the content.`,
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
        date: 'August 1st, 2021',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `The Agrogen website was a conventional project. These projects undergo budgeting based on a pre-approved layout. Based on this budget, 
        the designs are created along with an administrative panel that manages the content.`,
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
        date: 'February 1st, 2023',
        languages: ['javascript', 'codeigniter', 'grocerycrud', 'mysql', 'php'],
        description: `The Technow website was a conventional project. These projects undergo budgeting based on a pre-approved layout. Based on this budget, 
        the designs are created along with an administrative panel that manages the content.`,
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