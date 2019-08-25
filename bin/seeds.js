const mongoose = require('mongoose');
const User = require('../models/User');

const dbName = 'beauty-brands-back-end';
mongoose.connect(`mongodb://localhost/${dbName}`);

const users = [{
    name: "Arthur Gael Jesus",
    email: "arthurgaeljesus@focusdm.com.br",
    cpf: "957.028.899-08",
    zipCode: "75125-560",
    freight: 15.00,
    value: 234.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "LEV-JN-SL-36-GN",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 90.00,
    itemsAmount: 3,
  },
  {
    name: "Kaique Márcio Fernandes",
    email: "kaiquemarciofernandes@umbernardo.com.br",
    cpf: "044.417.918-60",
    zipCode: "69915-190",
    freight: 15.00,
    value: 120.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "GAT-HD-VC-40-IT",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 60.00,
    itemsAmount: 3,
  },
  {
    name: "Daniela Débora Evelyn Oliveira",
    email: "ddanieladeboraevelynoliveira@br.rhodia.com",
    cpf: "268.039.167-58",
    zipCode: "68903-629",
    freight: 15.00,
    value: 100.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "QOV-PN-FL-90-NH",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 50.00,
    itemsAmount: 3,
  },
  {
    name: "Davi Heitor Francisco Dias",
    email: "daviheitorfranciscodias@radicigroup.com",
    cpf: "403.732.783-06",
    zipCode: "87013-330",
    freight: 15.00,
    value: 84.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "VEV-BN-DF-32-DG",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 60.00,
    itemsAmount: 3,
  },
  {
    name: "Helena Andreia Yasmin da Mata",
    email: "helenaandreiayasmindamata@hawk.com.br",
    cpf: "957.028.899-08",
    zipCode: "75125-560",
    freight: 15.00,
    value: 234.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "LEV-JN-SL-36-GN",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 90.00,
    itemsAmount: 3,
  },
  {
    name: "Luzia Lara Adriana Monteiro",
    email: "Luzialaraadrianamonteiro@marcati.com",
    cpf: "970.032.096-08",
    zipCode: "59633-360",
    freight: 15.00,
    value: 32.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "GDA-RF-RJ-32-GS",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 60.00,
    itemsAmount: 3,
  },
  {
    name: "Bárbara Francisca da Rosa",
    email: "barbarafranciscadarosa@gamil.com",
    cpf: "240.829.097-02",
    zipCode: "74369-069",
    freight: 15.00,
    value: 453.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "LEV-JN-SL-36-GN",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 120.00,
    itemsAmount: 3,
  },
  {
    name: "Vitória Lúcia Fogaça",
    email: "vitorialuciafogaca@alphacandies.com.br",
    cpf: "340.955.884-54",
    zipCode: "79604-250",
    freight: 15.00,
    value: 21.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "DSA-FD-FA-32-VF",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 5.00,
    itemsAmount: 3,
  },
  {
    name: "Hugo Murilo Rafael Oliveira",
    email: "hugomurilorafaeloliveira_@uou.com.br",
    cpf: "599.714.057-17",
    zipCode: "88162-039",
    freight: 15.00,
    value: 543.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "DAC-AS-FD-23-XS",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 30.00,
    itemsAmount: 3,
  },
  {
    name: "Leandro Francisco Sebastião Lopes",
    email: "leandrofranciscosebastiaolopes@fepextrusao.com.br",
    cpf: "558.818.229-43",
    zipCode: "72236-535",
    freight: 15.00,
    value: 334.00,
    items: ['#item-1', '#item-2', '#item-3'],
    itemsSku: "GDS-DA-SG-32-JS",
    itemsDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor diam. Donec suscipit commodo purus nec tristique. Vestibulum dignissim neque ut dolor mollis rutrum. Donec condimentum dui suscipit urna varius facilisis.",
    itemsValue: 80.00,
    itemsAmount: 3,
  },
]

User.create(users, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${users.length} users`)
  mongoose.connection.close();
});