import {Product, Clothing, Appliance, loadProductsFetch} from '../../scripts/data/products.js';
import {cart} from '../../scripts/data/cart.js';
import '../../scripts/amazon.js'
import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: Product', () => {
  let product;
  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });
  
  afterEach(() => {
    document.querySelector('.js-test-container-3').innerHTML = '';
  });

  it('Product test', () => {
    expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6")
    expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg")
    expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs")
    expect(product.rating).toEqual({
      stars: 4.5,
      count: 87
    });
    expect(product.keywords).toEqual([
      "socks",
      "sports",
      "apparel"
    ])
    expect(product.getStarsUrl()).toContain(`images/ratings/rating-${product.rating.stars * 10}.png`);
    expect(product.getPrice()).toContain(`${formatCurrency(product.priceCents)}`);
    //expect(product.extraInfoHTML()).toContain();
  })

});

describe('test suite: Clothing', () => {
  let clothing;

  beforeEach(() => {
    loadProductsFetch();
    clothing = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  });

  afterEach(() => {
    document.querySelector('.js-test-container-3').innerHTML = '';
  });

  it('Clothing test', () => {
    expect(clothing.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(clothing.image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
    expect(clothing.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
    expect(clothing.rating).toEqual({
      stars: 4.5,
      count: 56
    });
    expect(clothing.priceCents).toEqual(799);
    expect(clothing.type).toEqual("clothing");
    expect(clothing.sizeChartLink).toEqual("images/clothing-size-chart.png");
    //methods below
    expect(clothing.getStarsUrl()).toContain(`images/ratings/rating-${clothing.rating.stars * 10}.png`);
    expect(clothing.getPrice()).toContain(`${formatCurrency(clothing.priceCents)}`);
    
    expect(clothing.extraInfoHTML()).toContain(`<a href="${clothing.sizeChartLink}" target="_blank">Size chart</a>`);
      
  })  
    
  
});

describe('test suite: Appliance', () => {
  let appliance;
  beforeEach(() => {
    appliance = new Appliance(
      {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/products/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        rating: {
          stars: 5,
          count: 2197
        },
        priceCents: 1899,
        keywords: [
          "toaster",
          "kitchen",
          "appliances"
        ],
        type: "appliance",
        instructionsLink: "images/appliance-instructions.png",
        warrantyLink: "images/appliance-warranty.png"
      }
    );


  });

  afterEach(() => {
    document.querySelector('.js-test-container-3').innerHTML = '';
  });

  it('Appliance test', () => {
    expect(appliance.keywords).toEqual([
      "toaster",
      "kitchen",
      "appliances"
    ]);
    expect(appliance.type).toEqual('appliance');
    expect(appliance.instructionsLink).toEqual("images/appliance-instructions.png");
    expect(appliance.warrantyLink).toEqual("images/appliance-warranty.png");
    //methods below
    expect(appliance.getStarsUrl()).toContain(`images/ratings/rating-${appliance.rating.stars * 10}.png`);
    expect(appliance.getPrice()).toContain(`${formatCurrency(appliance.priceCents)}`);
    expect(appliance.extraInfoHTML()).toContain(`
    <a href="${appliance.instructionsLink}" target="_blank">Instructions</a>
    <a href="${appliance.warrantyLink}" target="_blank">Warranty</a>
    `)
  })
});




