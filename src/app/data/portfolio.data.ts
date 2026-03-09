import { ProfileData } from '../models/portfolio.model';

export const PROFILE: ProfileData = {
  fullName: 'Rachid Elkhatiri',
  role: 'Full Stack Developer | Java / Angular',
  shortIntro: 'Je conçois des applications web robustes, maintenables et orientées performance pour des environnements exigeants.',
  heroDescription: 'Specialise en Spring Boot et Angular, j allie architecture backend solide et experiences frontend fluides pour livrer des produits professionnels.',
  yearsExperience: 4,
  avatar: '/moi.png',
  cvLink: '#',
  email: 'rachidkhtr@gmail.com',
  githubUsername: 'Rachid-Elkhatiri',
  aboutSummary: 'Developpeur Full Stack passionne par les architectures modulaires, les APIs REST securisees et la qualite logicielle. J ai participe a la conception et au deploiement de solutions metier avec Java, Angular et bases de donnees relationnelles.',
  expertiseAreas: [
    'Architecture Spring Boot et microservices',
    'Conception d interfaces Angular performantes',
    'Integration base de donnees PostgreSQL, Oracle et MySQL',
    'Industrialisation avec Docker, CI/CD et Git'
  ],
  skillGroups: [
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Microservices', 'REST APIs']
    },
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML / CSS', 'Bootstrap']
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MySQL', 'Oracle']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'Git', 'CI/CD']
    }
  ],
  projects: [
    {
      name: 'Application de gestion des convocations',
      description: 'Plateforme de gestion et suivi des convocations avec workflows administratifs et generation automatique de documents.',
      technologies: ['Spring Boot', 'Thymeleaf', 'Oracle'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      github: '#',
      demo: '#'
    },
    {
      name: 'Gestion de publications scientifiques',
      description: 'Application full stack pour la soumission, validation et suivi des publications avec tableau de bord analytique.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      github: '#',
      demo: '#'
    },
    {
      name: 'Generation de PDF de diplomes',
      description: 'Service backend pour produire des diplomes PDF personnalises avec gestion de templates et signatures numeriques.',
      technologies: ['Spring Boot', 'Apache PDFBox'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      github: '#',
      demo: '#'
    },
    {
      name: 'API REST Microservices',
      description: 'Ecosysteme microservices securise avec gateway, authentification JWT, traçabilite et observabilite.',
      technologies: ['Spring Boot', 'Spring Cloud', 'Docker'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
      github: '#',
      demo: '#'
    }
  ],
  experiences: [
    {
      period: '2024 - Aujourd hui',
      title: 'Full Stack Developer - Projet SI Entreprise',
      context: 'Conception d un portail metier orienté services pour la gestion de processus internes.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      responsibilities: [
        'Conception des APIs REST et securisation avec Spring Security',
        'Developpement de modules Angular responsives',
        'Mise en place des pipelines CI/CD et conteneurisation Docker'
      ]
    },
    {
      period: '2022 - 2024',
      title: 'Backend Developer - Plateforme documentaire',
      context: 'Developpement de microservices pour la gestion de documents et workflow de validation.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Kubernetes'],
      responsibilities: [
        'Optimisation des performances SQL et JPA',
        'Mise en place de standards de qualite et tests d integration',
        'Collaboration avec equipes frontend et architecture'
      ]
    }
  ],
  highlightRepos: [
    {
      name: 'spring-angular-enterprise-template',
      description: 'Template full stack avec authentification JWT, roles et dashboard admin.',
      link: '#'
    },
    {
      name: 'diploma-pdf-generator',
      description: 'API de generation PDF robuste basee sur Spring Boot et PDFBox.',
      link: '#'
    },
    {
      name: 'microservices-observability-lab',
      description: 'Lab microservices avec gateway, tracing distribue et monitoring.',
      link: '#'
    }
  ],
  contacts: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/Elkhatiri-Rachid',
      link: 'www.linkedin.com/in/rachid-elkhatiri',
      iconClass: 'fa-brands fa-linkedin'
    },
    {
      label: 'GitHub',
      value: 'github.com/Elkhatiri-Rachid',
      link: 'github.com/Elkhatiri-Rachid',
      iconClass: 'fa-brands fa-github'
    },
    {
      label: 'Email',
      value: 'rachidkhtr@gmail.com',
      link: 'mailto:rachidkhtr@gmail.com',
      iconClass: 'fa-solid fa-envelope'
    }
  ]
};
