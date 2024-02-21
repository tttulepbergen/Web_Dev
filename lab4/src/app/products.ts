export interface Product {
  id: number;
  name: string;
  image: string,
  price: number;
  description: string;
  rating: number,
  link: string
}

export const products = [
  {
    id: 1, 
    name: 'Sony WH-1000XM4', 
    image:'https://resources.cdn-kaspi.kz/img/m/p/hb9/h06/63894367535134.jpg?format=gallery-medium', 
    price: 121786, 
    description: 'Type: headset, Type: overhead, Connection: wireless, Acoustic design type: closed, Mounting type: headband, Active noise reduction system: Yes, Microphone: Yes', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000' 
  },
  { 
    id: 2,
    name: 'Sony PlayStation 5 Slim',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    price: 264658,
    description: 'Type: Stationary, SSD capacity: 1000.0 GB, UHD (4K), Support: Yes, Game Media Type: BD (Blu-ray Disc)',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
  }, 
  { 
    id: 3,
    name: 'Apple iPhone 15 Pro Max 256Gb',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-large',
    price: 623120 ,
    description: 'NFC Technology: Yes, Color: Gray, Screen type: OLED, Super Retina XDR display, diagonal: 6.7 inch, RAM size: 8 GB, Processor: 6-core Apple A17 Pro, Internal memory: 256.0 GB, Battery capacity: 4422.0mAh',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  }, 
  { 
    id: 4,
    name: 'Apple Watch SE GPS 40mm',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    price: 131212,
    description: 'Platform support: iOS, Case material: Aluminum, Case color: Black, Case shape: rectangular, Interfaces: Bluetooth,Wi-Fi,NFC, Screen technology: OLED, Internal memory: 32 GB, Working time: up to 18 hours',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000'
  },
  { 
    id: 5,
    name: 'ASUS TUF Gaming F15 FX506',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hba/84526606811166.jpg?format=gallery-medium',
    price: 419930,
    description: 'screen diagonal: 15.6 inch, processor: Intel Core i7-11800H, Video card: NVIDIA GeForce RTX 3050, RAM size: 16.0 GB, Hard drive type: SSD, Total storage capacity: 512.0 GB',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hc-hn040-90nr0724-m00zs0-chernyi-114694062/?c=750000000'
  }, 
  { 
    id: 6,
    name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    price: 113462,
    description: 'type: headphones, type: in-channel, connection: wireless, type of acoustic design: closed, type of attachment: without attachment, active noise reduction system: Yes, microphone: Yes',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  }, 
  { 
    id: 7,
    name: 'Logitech G Pro X Superlight',
    image:'https://resources.cdn-kaspi.kz/img/m/p/h90/h02/64222437474334.jpg?format=gallery-medium',
    price: 53999,
    description: 'Sensor type: Optical laser, Connection type: Wireless, Interface: USB and Radio channel, Design: for right hand, Gaming: Yes, Optical sensor resolution: 25600.0 DPI',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-belyi-102712667/?c=750000000'
  }, 
  { 
    id: 8,
    name: 'Microsoft Surface Pro Signature Keyboard',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h00/65122331951134.jpg?format=gallery-medium',
    price: 179900,
    description: 'Design: Compact, Type: Mechanical, Purpose: for tablet, Connection type: Wireless',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-signature-keyboard-chernyi-104879334/?c=750000000'
  }, 
  { 
    id: 9,
    name: 'Smart speaker Yandex Station Light brown',
    image:'https://resources.cdn-kaspi.kz/img/m/p/hbf/h77/64088472846366.jpg?format=gallery-medium',
    price: 27161,
    description: 'total capacity: 5.0W, Smart Home control: Yes, Voice Assistant: Alice, Supported language: Russian, Wi-Fi support: Yes, Bluetooth support: Yes',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-korichnevyi-102104381/?c=750000000'
  }, 
  { 
    id: 10,
    name: 'Sony ZV-E10 Kit 16-50mm black',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h77/64353306574878.jpg?format=gallery-medium',
    price: 406524,
    description: 'Type: Mirrorless with interchangeable optics, Number of effective pixels: 24.2 Megapixels, Lens included: Yes,Diagonal LCD screen: 3.0 inch, Manual shutter speed and aperture adjustment: Yes',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/?c=750000000'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/