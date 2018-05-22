import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/pages/inicio',
    home: true,
  },
  {
    title: 'Índice',
    group: true,
  },
  {
    title: 'Catálogo de Normas',
    icon: 'nb-lightbulb',
    link: '/pages/catalogo-normas',
  },
  {
    title: 'Instituciones',
    icon: 'nb-locked',
    children: [
      {
        title: 'ISO',
        link: '/pages/instituciones/iso',
      },
      {
        title: 'IEEE',
        link: '/pages/instituciones/ieee',
      },
      {
        title: 'NIST',
        link: '/pages/instituciones/nist',
      },
      {
        title: 'IRAM',
        link: '/pages/instituciones/iram',
      },
    ],
  },
  {
    title: 'Quiénes somos',
    icon: 'nb-user',
    link: '/pages/quienes-somos',
  },

];
