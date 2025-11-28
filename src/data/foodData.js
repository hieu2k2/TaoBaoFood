import CrispyVeganMiniFrühlingsrollen from '../assets/Menu/01 Crispy Vegan Mini Frühlingsrollen.jpeg';
import CrispyFrühlingsrollen from '../assets/Menu/02 Crispy Frühlingsrollen.jpg';
import CrispyWanTan from '../assets/Menu/03 Crispy WanTan.jpg';
import WanTanSuppe from '../assets/Menu/04 WanTan Suppe.jpg';
import KokosSuppe from '../assets/Menu/05 Kokos Suppe.jpg';
import Phobo from '../assets/Menu/10 Pho Bo.jpg';
import PhoGa from '../assets/Menu/11 Pho Ga.jpg';
import PadThai from '../assets/Menu/12 Pad Thai.jpg';
import UdonMiso from '../assets/Menu/13 Udon Miso.jpg';
import UdonFeuer from '../assets/Menu/16 Udon Feuer.jpg';
import UdonTraumCurry from '../assets/Menu/17 UdonTraumCurry.jpg';
import TokyoUdon from '../assets/Menu/18 Tokyo Udon.jpg';
import MangoTango from '../assets/Menu/19 MangoTango.jpg';
import ErdnussCurryLover from '../assets/Menu/20 Erdnuss-Curry Lover.jpg';
import RedSurprise from '../assets/Menu/21 Red Surprise.jpg';
import ChiliBeef from '../assets/Menu/22 Chili Beef.jpg';
import KoreanBeef from '../assets/Menu/23 Korean Beef.jpg';
import ChickenSpringen from '../assets/Menu/24 Chicken Springen.jpg';
import DuckandSauce from '../assets/Menu/25 Duck and Sauce.jpg';
import ChiliAlibaba from '../assets/Menu/26 Chili Alibaba.jpg';
import VeganOriginal from '../assets/Menu/27 Vegan Original.jpg';
import TofuPlus from '../assets/Menu/28 Tofu Plus.jpg';

export const categories = [{
    id: 'all',
    name: 'Alles'
  },
  {
    id: 'nem',
    name: 'Vorspeise'
  },
  {
    id: 'mipho',
    name: 'Nudeln & Pho'
  },
  {
    id: 'rice',
    name: 'Reis'
  },
];


export const foodList = [{
    id: 1,
    name: "Crispy Vegan Mini Frühlingsrollen",
    category: 'nem',
    image: CrispyVeganMiniFrühlingsrollen,
    price: " 3,20 €",
  },
  {
    id: 2,
    name: "Crispy Frühlingsrollen",
    category: 'nem',
    image: CrispyFrühlingsrollen,
    price: "3,90 €"
  },
  {
    id: 3,
    name: "Crispy WanTan",
    category: 'nem',
    image: CrispyWanTan,
    price: "4,50 €"
  },
  {
    id: 4,
    name: "WanTan Suppe",
    category: 'nem',
    image: WanTanSuppe,
    price: "4,90 €"
  },
  {
    id: 5,
    name: "Kokos Suppe",
    category: 'nem',
    image: KokosSuppe,
    price: "4,00 €"
  },
  {
    id: 10,
    name: "Phở Bò",
    category: 'mipho',
    image: Phobo,
    price: "11,90 €"
  },
  {
    id: 11,
    name: "Phở Gà",
    category: 'mipho',
    image: PhoGa,
    price: "10,90 €"
  },
  {
    id: 12,
    name: "Pad Thai",
    category: 'mipho',
    image: PadThai,
    price: "12,90 €",
    options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 13,
    name: "Udon Miso",
    category: 'mipho',
    image: UdonMiso,
    price: "12,90 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 16,
    name: "Udon Feuer",
    category: 'mipho',
    image: UdonFeuer,
    price: "12,90 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 17,
    name: "UdonTraumCurry",
    category: 'mipho',
    image: UdonTraumCurry,
    price: "10,50 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 18,
    name: "Tokyo Udon",
    category: 'mipho',
    image: TokyoUdon,
    price: "11,50 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 19,
    name: "Mango Tango",
    category: 'rice',
    image: MangoTango,
    price: "10,90 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 20,
    name: "Erdnuss Curry Lover",
    category: 'rice',
    image: ErdnussCurryLover,
    price: "12,90 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 21,
    name: "Red Surprise",
    category: 'rice',
    image: RedSurprise,
    price: "11,50 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 22,
    name: "Chili Beef",
    category: 'rice',
    image: ChiliBeef,
    price: "12,90€"
  },
  {
    id: 23,
    name: "Korean Beef",
    category: 'rice',
    image: KoreanBeef,
    price: "12,90 €"
  },
  {
    id: 24,
    name: "Chicken Springen",
    category: 'rice',
    image: ChickenSpringen,
    price: "12,90 €"
  },
  {
    id: 25,
    name: "Duck and Sauce",
    category: 'rice',
    image: DuckandSauce,
    price: "12,90 €"
  },
  {
    id: 26,
    name: "Chili Alibaba",
    category: 'rice',
    image: ChiliAlibaba,
    price: "12,90 €",options: [{
        id: "A",
        label: "Tofu",
        price: "10,50 €"
      },
      {
        id: "B",
        label: "Hühnerfleisch",
        price: "10,90 €"
      },
      {
        id: "C",
        label: "Garnelen",
        price: "12,90 €"
      },
      {
        id: "D",
        label: "Panierte Ente",
        price: "12,90 €"
      },{
        id: "E",
        label: "Rindfleisch",
        price: "11,50 €"
      },
      {
        id: "F",
        label: "Knuspring gebackenes",
        price: "11,50 €"
      },
    ]
  },
  {
    id: 27,
    name: "Vegan Original",
    category: 'rice',
    image: VeganOriginal,
    price: "10,00 €"
  },
  {
    id: 28,
    name: "Tofu Plus",
    category: 'rice',
    image: TofuPlus,
    price: "11,50 €"
  },
];