import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOption =[{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}]

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOptions;

  deliveryOption.forEach((option) => {
    if (deliveryOptionId === option.id) {
      deliveryOptions = option;
    }
  })

  return deliveryOptions
};

export function calculateDeliveryDate(deliveryOption) {
  let remainingDays = deliveryOption.deliveryDays
  let deliveryDate = dayjs(); 

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'days');

    if(!(deliveryDate.format('dddd') === 'Saturday' || deliveryDate.format('dddd') === 'Sunday')) {
      remainingDays --;
    };
  }

  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  return dateString;
};

function isWeekend(deliveryDate) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
}; 

