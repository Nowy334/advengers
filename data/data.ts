type Data = {
  text: string;
  title: string;
}

const DATA: Data[] = [
  {title: 'Żyjemy marketingiem', text:`Wierzymy, że wszystko co robimy przynosi realne korzyści dla firm, którym pomagamy rozwijać się i rosnąć
  Myśląc nieszablonowo wspólnie z Tobą chcemy wygrywać każdą marketingową walkę w internecie. 
  Marketing to nasza broń, Internet - Pole bitwy.
  To co, gramy  do jednej bramki razem?`},
  {title: 'Tworzymy dla ciebie', text: `5 miliardów filmów codziennie oglądanych jest w serwisie Youtube i aż 33% ludzi korzysta z najpopularniejszej platformy wideo na świecie. Jeżeli dodać do tego użytkowników Facebooka, Instagrama, a także widzów klasycznej telewizji – statystyki te poszybowały by w górę jeszcze wyżej! Nie pozostań w tyle i również wykorzystaj wspaniałe możliwości przekazu emocjonalnego jakie daje ci współczesne wideo!`},
];

const DATA_ABOUT: Data[] = [
  {title:'Grafika', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  {title:'Grafika', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  {title:'Grafika', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  {title:'Grafika', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  {title:'Grafika', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' }
];

const PORTFOLIO_PROJECTS: {img: string, title: string, text:string}[] = [
  {img: '/assets/project-1', title: 'House Design', text: 'photography' },
  {img: '/assets/project-2', title: 'House Design', text: 'photography' },
  {img: '/assets/project-3', title: 'House Design', text: 'photography' },
  {img: '/assets/project-4', title: 'House Design', text: 'photography' },
  {img: '/assets/project-5', title: 'House Design', text: 'photography' },
  {img: '/assets/project-6', title: 'House Design', text: 'photography' },
  {img: '/assets/project-7', title: 'House Design', text: 'photography' },
  {img: '/assets/project-8', title: 'House Design', text: 'photography' },
]; 

const ABOUT_ITEMS: {img: string; name: string; title:string; text:string, type?: string}[] = [
  {img:'/assets/face-3-min', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-4-min', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-5-min', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-6-min', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},

]

const OFFER_ITEMS: {img: string; title:string; text:string; dark?:boolean}[] = [
  {img: '/assets/icon-design.png', title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Social Media', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec', dark: true },
  {img: '/assets/icon-design.png', title: 'Cloud Processing', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Banner Design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec', dark: true },
  {img: '/assets/icon-design.png', title: 'Store Design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Data Analysis', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec', dark: true },
  {img: '/assets/icon-design.png', title: 'Web Market', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Premium Support', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec', dark: true },
  {img: '/assets/icon-design.png', title: 'App Development', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
]

const SERVICE_ITEMS:{ title:string; text:string; last?: boolean }[] = [
  {title:'Vivamus viverra velit sed', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},  
  {title:'Proin faucibus', text:'Phasellus vitae ullamcorper enim, ac porta neque. Sed lorem justo'},  
  {title:'Fusce ut porta', text:'Phasellus vitae ullamcorper enim, ac porta neque. Sed lorem justo'},  
  {title:'Laoreet semper massa', text:'Phasellus vitae ullamcorper enim, ac porta neque. Sed lorem justo', last: true},  
  {title:'Massa laoreet semper', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},  
  {title:'Ullamcorper enim', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},  
  {title:'Aenean molestie', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},  
  {title:'Curabitur blandit', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', last:true},  

];

const ABOUTUS_ITEMS: {img: string; title:string; text:string; dark?:boolean}[] = [
  {img: '/assets/icon-design.png', title: 'Web Design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec'},
  {img: '/assets/icon-design.png', title: 'Product Marketing', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Web Design', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec'},
  {img: '/assets/icon-design.png', title: 'Web Development', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' },
  {img: '/assets/icon-design.png', title: 'Product Marketing', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec' }
]

export {DATA_ABOUT, PORTFOLIO_PROJECTS, ABOUT_ITEMS, OFFER_ITEMS, SERVICE_ITEMS, ABOUTUS_ITEMS};




export default DATA;