import profile from "../img/profile.jpg";
import avatar from "../img/avatar.jpg";
import pokedexReact from "../img/projects/pokedex-react.gif";
import landingPageRestaurant from "../img/projects/landing-page-restaurant.gif";
import calculatorReact from "../img/projects/calculator-react.gif";

export const user = {
  firstName: "Jeremias",
  lastName: "Lorenzetti Brizolla",
  profession: "Desenvolvedor Web Full Stack",
  presentation: `
    Sou uma pessoa determinada a alcançar minhas metas, 
    sempre com muito respeito e companheirismo no local de trabalho, 
    tenho facilidade no trabalho em equipe, 
    procuro sempre estar me desafiando para que 
    hoje seja melhor que ontem ou pelo menos projetar o 
    caminho para que isso aconteça, estou sempre com pensamento 
    voltado a resolução de conflitos e/ou problemas.`,
  objective: `
    No inicio do próximo ano pretendo iniciar a 
    faculdade de Analise e desenvolvimento de Sistemas 
    ou uma especialização em UX/UI Designer.`,
  avatar: avatar,
  photo: profile,
  age: 31,
  nationality: "Brasileiro",
  language: "Portugues",
  address: "Sapiranga - RS - Brasil",
  github: "https://github.com/jeremiaslorenzettibrizolla",
  linkedin:
    "https://www.linkedin.com/in/jeremias-lorenzetti-brizolla-255243140/",
  whatsapp: "https://web.whatsapp.com/send?phone=5551996745734",
  phone: "+55 51 9 9674-5734",
  email: "jeremiasbrizolla@gmail.com",
  skills: [
    {
      id: 1,
      name: "HTML5",
      level: "90%",
    },
    {
      id: 2,
      name: "CSS3",
      level: "85%",
    },
    {
      id: 3,
      name: "JavaScript",
      level: "70%",
    },
    {
      id: 4,
      name: "TypeScript",
      level: "70%",
    },
    {
      id: 5,
      name: "PostgreSQL",
      level: "80%",
    },
    {
      id: 6,
      name: "Express JS",
      level: "70%",
    },
    {
      id: 7,
      name: "Redis",
      level: "50%",
    },
    {
      id: 8,
      name: "TypeORM",
      level: "60%",
    },
    {
      id: 9,
      name: "Node JS",
      level: "70%",
    },
    {
      id: 10,
      name: "React JS",
      level: "50%",
    },
    {
      id: 11,
      name: "API's Rest",
      level: "70%",
    },
  ],
  workingExperience: [
    {
      id: 1,
      experiencePeriod: "02/2021 - Atual",
      occupation: "Desenvolvedor Web Full Stack Trainee",
      company: "Growdev",
      description: `
        Desenvolver aplicações utilizando as melhores práticas 
        e tecnologias do mercado, tais como:
        HTML, CSS, Bootstrap, JavaScript, Node, 
        React, PostgreSQL, APIs, PWA, Git, Heroku, 
        PaaS, Scrum e mais - através da atuação em 
        demandas e projetos reais das empresas parceiras.`,
    },
    {
      id: 2,
      experiencePeriod: "10/2021 - Atual",
      occupation: "Desenvolvedor Back-End Junior",
      company: "beAudio Informática",
      description: `
        Desenvolver aplicações back-end utilizando Node JS,
        Sequelize e outras ferramentas`,
    },
  ],
  educationalQualifications: [
    {
      id: 1,
      durationPeriod: "02/2021 - 02/2022",
      course: "Desenvolvedor Web Full Stack",
      school: "Growdev",
      description: `
        O Programa Starter é uma formação completa em Desenvolvimento 
        Web Full Stack, que prepara o estudante para o mercado através 
        de uma metodologia e tecnologias direcionadas para o que as 
        empresas demandam, tem como principal objetivo preparar e 
        apoiar a inserção de novos desenvolvedores de software no 
        mercado de trabalho.
        O Programa de formação de Desenvolvedores Web Full Stack 
        possui 1000 horas, tendo aproximadamente 11 meses de aulas 
        ao-vivo e com conteúdos síncronos e assíncronos. Dentro do 
        conteúdo programático se encontra: Introdução ao desenvolvimento 
        de sistemas, Banco de dados relacional e não relacional, 
        Programação Front e Back-end, Arquitetura, Engenharia e Qualidade 
        de software. Com tecnologias como HTML, CSS, Javascript, Node, 
        React, PWA, PaaS, Postgres e muito mais. Além do projeto aplicado, 
        uma experiência real na construção de um projeto de software com 
        a equipe de engenharia da Growdev.
      `,
    },
    {
      id: 2,
      durationPeriod: "09/2021",
      course: "CSS",
      school: "Linkedin",
      description: "Descubra o CSS - 1 hora e 37 min",
    },
    {
      id: 3,
      durationPeriod: "09/2021",
      course: "HTML",
      school: "Linkedin",
      description: "HTML: Formação Básica - 2 hora e 38 min",
    },
  ],
  projects: [
    {
      id: 1,
      image: pokedexReact,
      link: "https://github.com/jeremiaslorenzettibrizolla/pokedexReact-react.git",
      title: "Pokedex em React",
      text: "Exercitando o consumo de api's.",
    },
    {
      id: 2,
      image: landingPageRestaurant,
      link: "https://github.com/jeremiaslorenzettibrizolla/responsive-website-restaurant.git",
      title: "Landing Page Restaurante",
      text: "Utilizando HTML, CSS, SCSS e Javascript",
    },
    {
      id: 3,
      image: calculatorReact,
      link: "https://github.com/jeremiaslorenzettibrizolla/react-calculator-main.git",
      title: "Calculadora em react",
      text: "Praticando os hooks useState e useEffect",
    },
  ],
};
