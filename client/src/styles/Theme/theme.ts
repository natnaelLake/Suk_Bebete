type Theme = {
  breakPoints: string[];
  sizes: string[];
  space: string[];
  colors: {
    primary: string[] | any;
    white: string[] | any;
    black: string[] | any;
    pink: string[] | any;
    cyan: string[] | any;
    alert: string[] | any;
    succes: string[] | any;
    warning: string[] | any;
    gradient: string[] | any;
    sidebar: string[] | any;
    background: string[] | any;
    border: {
      default: string | any;
      focus: string | any;
    };
  };
  fontSizes: string[];
  fontWeights: number[];
  lineHeights: string[];
  letterSpacings: object;
  borders: Array<string | number>;
  radii: string[];
  zIndices: number[];
  shadows: string[];
};

export const theme: Theme = {
  breakPoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '35px', //6
    '40px', //7
    '45px', //8
    '50px', //9
    '55px', //10
    '60px', //11
    '65px', //12
    '70px', //13
    '75px', //14
    '80px', //15
    '85px', //16
    '90px', //17
    '95px', //18
    '100px', //19
    '105px', //20
    '110px', //21
    '115px', //22
    '120px', //23
    '125px', //24
    '130px', //25
    '135px', //26
    '140px', //27
    '145px', //28
    '150px', //29
    '155px', //30
    '160px', //31
    '165px', //32
    '170px', //33
    '175px', //34
    '180px', //35
    '185px', //36
    '190px', //37
    '195px', //38
    '200px', //39
    '205px', //40
    '210px', //41
    '215px', //42
    '220px', //43
    '225px', //44
    '230px', //45
    '235px', //46
    '240px', //47
  ],
  space: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '35px', //6
    '40px', //7
    '45px', //8
    '50px', //9
    '55px', //10
    '60px', //11
    '65px', //12
    '70px', //13
    '75px', //14
    '80px', //15
    '85px', //16
    '90px', //17
    '95px', //18
    '100px', //19
    '105px', //20
    '110px', //21
    '115px', //22
    '120px', //23
    '125px', //24
    '130px', //25
    '135px', //26
    '140px', //27
    '145px', //28
    '150px', //29
    '155px', //30
    '160px', //31
    '165px', //32
    '170px', //33
    '175px', //34
    '180px', //35
    '185px', //36
    '190px', //37
    '195px', //38
    '200px', //39
    '205px', //40
    '210px', //41
    '215px', //42
    '220px', //43
    '225px', //44
    '230px', //45
    '235px', //46
    '240px', //47
  ],
  colors: {
    white: [
      'rgba(255,255,255,0.1)',
      'rgba(255,255,255,0.2)',
      'rgba(255,255,255,0.3)',
      'rgba(255,255,255,0.4)',
      'rgba(255,255,255,0.5)',
      'rgba(255,255,255,0.6)',
      'rgba(255,255,255,0.7)',
      'rgba(255,255,255,0.8)',
      'rgba(255,255,255,0.9)',
      'rgba(255,255,255,1)',
    ],
    black: [
      'rgba(15, 18, 18, 0.1)',
      'rgba(15, 18, 18, 0.2)',
      'rgba(15, 18, 18, 0.3)',
      'rgba(15, 18, 18, 0.4)',
      'rgba(15, 18, 18, 0.5)',
      'rgba(15, 18, 18, 0.6)',
      'rgba(15, 18, 18, 0.7)',
      'rgba(15, 18, 18, 0.8)',
      'rgba(15, 18, 18, 0.9)',
      'rgba(15, 18, 18, 1)',
    ],
    primary: [
      '#e3f2fd',
      '#bbdefb',
      '#90caf9',
      '#64b5f6',
      '#42a5f5',
      '#2196f3',
      '#1e88e5',
      '#1976d2',
      '#1565c0',
      '#0d47a1',
    ],
    pink: [
      '#fce4ec',
      '#f8bbd0',
      '#f48fb1',
      '#f06292',
      '#ec407a',
      '#e91e63',
      '#d81b60',
      '#c2185b',
      '#ad1457',
      '#880e4f',
    ],
    alert: [
      '#ffebee',
      '#ffcdd2',
      '#ef9a9a',
      '#e57373',
      '#ef5350',
      '#f44336',
      '#b71c1c',
      '#e53935',
      '#d32f2f',
      '#c62828',
    ],
    succes: [
      'rgba(34, 186, 98, 0.1)',
      'rgba(34, 186, 98, 0.2)',
      'rgba(34, 186, 98, 0.3)',
      'rgba(34, 186, 98, 0.4)',
      'rgba(34, 186, 98, 0.5)',
      'rgba(34, 186, 98, 0.6)',
      'rgba(34, 186, 98, 0.7)',
      'rgba(34, 186, 98, 0.8)',
      'rgba(34, 186, 98, 0.9)',
      'rgba(34, 186, 98, 1)',
    ],
    warning: [
      '#fff8e1',
      '#ffecb3',
      '#ffe082',
      '#ffd54f',
      '#ffca28',
      '#ffc107',
      '#ffb300',
      '#ffa000',
      '#ff8f00',
      '#ff6f00',
    ],
    gradient: [
      '#fafafa',
      '#f5f5f5',
      '#eeeeee',
      '#e0e0e0',
      '#bdbdbd',
      '#9e9e9e',
      '#757575',
      '#616161',
      '#424242',
    ],
    sidebar: [
      'rgba(38, 34, 102, 0.1)',
      'rgba(38, 34, 102, 0.2)',
      'rgba(38, 34, 102, 0.3)',
      'rgba(38, 34, 102, 0.4)',
      'rgba(38, 34, 102, 0.5)',
      'rgba(38, 34, 102, 0.6)',
      'rgba(38, 34, 102, 0.7)',
      'rgba(38, 34, 102, 0.8)',
      'rgba(38, 34, 102, 0.9)',
      'rgba(38, 34, 102, 1)',
    ],
    cyan: [
      '#e0f7fa',
      '#b2ebf2',
      '#80deea',
      '#4dd0e1',
      '#26c6da',
      '#00bcd4',
      '#00acc1',
      '#0097a7',
      '#00838f',
      '#006064',
    ],
    background: [
      'rgba(243, 243, 243, 0.1)',
      'rgba(243, 243, 243, 0.2)',
      'rgba(243, 243, 243, 0.3)',
      'rgba(243, 243, 243, 0.4)',
      'rgba(243, 243, 243, 0.5)',
      'rgba(243, 243, 243, 0.6)',
      'rgba(243, 243, 243, 0.7)',
      'rgba(243, 243, 243, 0.8)',
      'rgba(243, 243, 243, 0.9)',
      'rgba(243, 243, 243, 1)',
    ],
    border: {
      default: 'rgba(213, 217, 231, 1)',
      focus: 'rgba(11, 128, 129, 1)',
    },
},
fontSizes: [
  '11px', //0
  '12px', //1
  '13px', //2
  '14px', //3
  '15px', //4
  '16px', //5
  '20px', //6
  '24px', //7
  '32px', //8
  '36px', //9
  '40px', //10
  '48px', //11
  '64px', //12
  '70px', //13
  '80px', //14
  '96px', //15
],
fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
lineHeights: [
  '11px', //0
  '12px', //1
  '13px', //2
  '14px', //3
  '15px', //4
  '16px', //5
  '20px', //6
  '24px', //7
  '32px', //8
  '36px', //9
  '40px', //10
  '48px', //11
  '64px', //12
  '70px', //13
  '80px', //14
  '96px', //15
],
letterSpacings: {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
},
borders: ['1px solid', '2px solid', '4px solid'],
radii: [
  '5px', //0
  '10px', //1
  '15px', //2
  '20px', //3
  '25px', //4
  '30px', //5
  '40px', //6
  '50px', //7
  '60px', //8
  '70px', //9
  '75px', //10
],
zIndices: [1, 2, 3, -1, 99, 150, 250],
shadows: ['0px 5px 20px rgba(0, 0, 0, 0.05)'],
};
