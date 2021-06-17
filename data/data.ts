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
  {img: '/assets/project-1.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-2.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-3.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-4.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-5.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-6.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-7.jpg', title: 'House Design', text: 'photography' },
  {img: '/assets/project-8.jpg', title: 'House Design', text: 'photography' },
]; 

const ABOUT_ITEMS: {img: string; name: string; title:string; text:string}[] = [
  {img:'/assets/face-3-min.png', name: 'Lysy to frajer', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-4-min.png', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-5-min.jpg', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-6-min.jpg', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
  {img:'/assets/face-7-min.jpg', name: 'Andrzej Kowalski', title: 'Testing Enginner', text:'Enter member description here which describes the position of member in company'},
]

export {DATA_ABOUT, PORTFOLIO_PROJECTS, ABOUT_ITEMS};




export default DATA;