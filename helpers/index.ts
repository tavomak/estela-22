export function getColorSchema(value: number) {
  const flatNumber = (value * 100).toFixed(0);
  let finalSchema;

  switch (true) {
    case (parseInt(flatNumber, 10) >= 60 && parseInt(flatNumber, 10) <= 80):
      finalSchema = [
        {
          offset: 0,
          color: '#EFCB03',
          opacity: 1,
        },
        {
          offset: 90,
          color: '#DCA403',
          opacity: 1,
        },
      ];
      break;
    case (parseInt(flatNumber, 10) >= 80 && parseInt(flatNumber, 10) <= 100):
      finalSchema = [
        {
          offset: 0,
          color: '#84F2B8',
          opacity: 1,
        },
        {
          offset: 90,
          color: '#01982F',
          opacity: 1,
        },
      ];
      break;
    default:
      finalSchema = [
        {
          offset: 0,
          color: '#FF5733',
          opacity: 1,
        },
        {
          offset: 90,
          color: '#980101 ',
          opacity: 1,
        },
      ];
      break;
  }
  return finalSchema;
}

export function getColorText(value: number) {
  const flatNumber = (value * 100).toFixed(0);
  let color;

  switch (true) {
    case (parseInt(flatNumber, 10) >= 60 && parseInt(flatNumber, 10) <= 80):
      color = '#DCA403';
      break;
    case (parseInt(flatNumber, 10) >= 80 && parseInt(flatNumber, 10) <= 100):
      color = '#01982F';
      break;
    default:
      color = '#980101 ';
      break;
  }
  return color;
}

export function toRoute(string: string) {
  return string.toLowerCase();
}

export function toSlug(string: string) {
  return string.toLowerCase().replaceAll(' ', '-');
}
