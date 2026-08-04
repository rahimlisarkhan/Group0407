const list = [1, 2, 3, 4];

// let num = list[2]; // 3

// let result = num + 5;

// Object functionlar ile  || JSON - Javscript Object National
const personal1 = {
  name: 'John',
  surname: 'Doe',
  //   'age-yash': 20,
  age: 20,
  img_url: null,
  is_married: false,
  address: ['Street 1', 'St 2'],
  skill: {
    name: 'Content writer',
    level: 80,
    progress: {
      level: 20,
      start_date: '2026.02.12',
    },
  },
};

// const employees = [
//   personal1,
//   personal1,
//   personal1,
//   personal1,
//   personal1,
//   personal1,
//   personal1,
// ];

// console.log('employees', employees);

// delete personal.is_married; // REMOVE

// personal.position = 'Developer'; // ADD

// personal.surname = 'Scatt'; // OVERIDE

// const result = personal.address[0];
// const result = personal['age-yash'];
// const result = personal['age'];

// console.log(personal1.skill.progress.start_date);
// console.log(personal1);

const data = [
  {
    id: '4047',
    resourceId: '686',
    is_external: false,
    phone: '+994503874541',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title:
      "Anar Mirmməmmədli\nGellakkorreksiyasıbkkuygjcgchvjhbjhkvghcghjvhkjvjhvhgkvchgchgvhkkhvjhbvjhbjlbjhvhgcdfxgfvjhbkhcdxgcvjbjlbjlvckhbknljhvccvjlbghukjncxdfghjksdfghjklzxcvbnm,.asdfghjkl;'qwertyuiop[]\nTipsi korreksiyası\nTipsi qaynaq\n  ",
    start: {
      dateTime: '2026-08-04T14:05:00',
    },
    end: {
      dateTime: '2026-08-04T21:05:00',
    },
  },
  {
    id: '3974',
    resourceId: '288',
    is_external: false,
    phone: '+994504496464',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title:
      'Zaur Əxi (qarayev)\nwellak\n  - Kérastase Specifique Bain Divalent Shampoo (100ml) ',
    start: {
      dateTime: '2026-08-04T09:10:00',
    },
    end: {
      dateTime: '2026-08-04T10:10:00',
    },
  },
  {
    id: '4049',
    resourceId: '690',
    is_external: false,
    phone: '+994504496464',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title:
      'Zaur Əxi (qarayev)\n(3) Tipsi korreksiyası\n(2) Cüt terapiyası\n  - kuyfgvhbnjiougyhbn ',
    start: {
      dateTime: '2026-08-04T09:15:00',
    },
    end: {
      dateTime: '2026-08-04T10:15:00',
    },
  },
  {
    id: '4048',
    resourceId: '690',
    is_external: false,
    phone: '+994504496464',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title:
      'Zaur Əxi (qarayev)\n(2) Cüt terapiyası\n(3) Tipsi korreksiyası\n  - kuyfgvhbnjiougyhbn ',
    start: {
      dateTime: '2026-08-04T09:25:00',
    },
    end: {
      dateTime: '2026-08-04T10:10:00',
    },
  },
  {
    id: '4046',
    resourceId: '686',
    is_external: false,
    phone: '+994519001833',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title: 'Aygün \n(2) Tipsi qaynaq\nTipsi korreksiyası\n  ',
    start: {
      dateTime: '2026-08-04T14:10:00',
    },
    end: {
      dateTime: '2026-08-04T17:10:00',
    },
  },
  {
    id: '4052',
    resourceId: '473',
    is_external: false,
    phone: '+994707596060',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title: 'İlkin Abbaslı\nQadın saç kəsimi\n  - 444ddd ',
    start: {
      dateTime: '2026-08-04T13:55:00',
    },
    end: {
      dateTime: '2026-08-04T14:55:00',
    },
  },
  {
    id: '4003',
    resourceId: '686',
    is_external: false,
    phone: '+9945557664823',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title: 'Hank Zakroff\n(2) Gellak\nTipsi korreksiyası\n  ',
    start: {
      dateTime: '2026-08-04T13:10:00',
    },
    end: {
      dateTime: '2026-08-04T14:05:00',
    },
  },
  {
    id: '4045',
    resourceId: '686',
    is_external: false,
    phone: '+994775646316',
    appointment_type: 'SERVICES',
    is_new_customer: true,
    status: 'START',
    color: '#f1c87a',
    title: 'Talıb Əsgərov\nTipsi qaynaq\nwellak\n  ',
    start: {
      dateTime: '2026-08-04T14:15:00',
    },
    end: {
      dateTime: '2026-08-04T16:15:00',
    },
  },
  {
    id: '4039',
    resourceId: '665',
    is_external: false,
    phone: '+994102609842',
    appointment_type: 'SERVICES',
    is_new_customer: true,
    status: 'START',
    color: '#f1c87a',
    title: 'Mustafa FNC BOKT\nKriolipoliz\n  - bbbb b ',
    start: {
      dateTime: '2026-08-04T12:05:00',
    },
    end: {
      dateTime: '2026-08-04T13:25:00',
    },
  },
  {
    id: '4040',
    resourceId: '690',
    is_external: false,
    phone: '+994559465396',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'CANCEL',
    color: '#ff8a8a',
    title: 'Gülnur Hüseynova\nTipsi korreksiyası\n  - Silindi ',
    start: {
      dateTime: '2026-08-04T11:10:00',
    },
    end: {
      dateTime: '2026-08-04T12:10:00',
    },
  },
  {
    id: '4034',
    resourceId: '195',
    is_external: false,
    phone: '+994770563655',
    appointment_type: 'SERVICES',
    is_new_customer: true,
    status: 'START',
    color: '#f1c87a',
    title:
      'Aysel Şükürova\nHidrafasial üz baxımı\nQadın saç kəsimi\n  - Silindi ',
    start: {
      dateTime: '2026-08-04T09:00:00',
    },
    end: {
      dateTime: '2026-08-04T10:30:00',
    },
  },
  {
    id: '4033',
    resourceId: '693',
    is_external: false,
    phone: '+994708800106',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title: 'Tural Səlimov\nGellak\n  - Ləğv edilib ',
    start: {
      dateTime: '2026-08-04T09:10:00',
    },
    end: {
      dateTime: '2026-08-04T10:10:00',
    },
  },
  {
    id: '4032',
    resourceId: '473',
    is_external: false,
    phone: '+994708800106',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'CANCEL',
    color: '#ff8a8a',
    title: 'Tural Səlimov\nCüt terapiyası\n  - Ləğv edilib ',
    start: {
      dateTime: '2026-08-04T09:00:00',
    },
    end: {
      dateTime: '2026-08-04T09:30:00',
    },
  },
  {
    id: '4030',
    resourceId: '368',
    is_external: false,
    phone: '+904678923',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title: 'Gülsüm Xanım\nCüt terapiyası\n  - Ləğv edilib ',
    start: {
      dateTime: '2026-08-04T09:00:00',
    },
    end: {
      dateTime: '2026-08-04T09:30:00',
    },
  },
  {
    id: '4017',
    resourceId: '688',
    is_external: false,
    phone: '+994775410973',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title: 'Günay Rzayeva\nGellak\n  ',
    start: {
      dateTime: '2026-08-04T10:00:00',
    },
    end: {
      dateTime: '2026-08-04T11:00:00',
    },
  },
  {
    id: '4051',
    resourceId: '368',
    is_external: false,
    phone: '+994707596060',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title: 'İlkin Abbaslı\nCüt terapiyası\n  - 444ddd ',
    start: {
      dateTime: '2026-08-04T12:00:00',
    },
    end: {
      dateTime: '2026-08-04T12:30:00',
    },
  },
  {
    id: '4001',
    resourceId: '686',
    is_external: false,
    phone: '+994503874541',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title: 'Anar Mirmməmmədli\nGellak\nTipsi korreksiyası\n  ',
    start: {
      dateTime: '2026-08-04T11:00:00',
    },
    end: {
      dateTime: '2026-08-04T13:00:00',
    },
  },
  {
    id: '4000',
    resourceId: '686',
    is_external: false,
    phone: '+994775410973',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'START',
    color: '#f1c87a',
    title: 'Günay Rzayeva\nGellak\nTipsi korreksiyası\n  ',
    start: {
      dateTime: '2026-08-04T09:00:00',
    },
    end: {
      dateTime: '2026-08-04T11:00:00',
    },
  },
  {
    id: '3977',
    resourceId: '288',
    is_external: false,
    phone: '+905435294677',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title:
      'Mustafa AKIN\n(4) Hidrafasial üz baxımı\n(2) Cüt terapiyası\nKriolipoliz\n  ',
    start: {
      dateTime: '2026-08-04T13:00:00',
    },
    end: {
      dateTime: '2026-08-04T15:20:00',
    },
  },
  {
    id: '3975',
    resourceId: '288',
    is_external: false,
    phone: '+994519001833',
    appointment_type: 'SERVICES',
    is_new_customer: false,
    status: 'COMPLETED',
    color: '#b4bcff',
    title: 'Aygün \n(2) Kriolipoliz\nCüt terapiyası\nHidrafasial üz baxımı\n  ',
    start: {
      dateTime: '2026-08-04T10:20:00',
    },
    end: {
      dateTime: '2026-08-04T12:40:00',
    },
  },
];

data[0].resourceId;
// data[0]['resource-id'];
