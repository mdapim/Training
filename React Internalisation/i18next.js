import i18next from 'i18next';

//Basics

// i18next.init({
//   //   debug: true,
//   fallbackLng: 'en', //can pass through an array of languages as fallback or custom function as fallback
//   fallbackNS: 'common', //can find a key if its not found in the default namespace
//   resources: {
//     en: {
//       translation: {
//         // translation is a default name space can be specified across files for larger projects
//         key: 'hello world',
//         look: {
//           deeper: 'some deep key',
//         },
//         error: {
//           //can alos handle fall back keys
//           404: 'Not found!',
//           unknown: 'Some strange thing happened',
//         },
//       },
//     },
//     de: {
//       translation: {
//         key: 'hallo Welt',
//       },
//       common: {
//         // can access passing common:save to t first arg as prefix
//         // setting object property to namespace {ns: 'common}
//         save: 'Speichern',
//         cancel: 'Abbrechen',
//       },
//     },
//     'de-CH': {
//       // if there is no key in swis german looks in german
//       translation: {
//         // key: 'hallo Welti',
//       },
//     },
//   },
// });

//const code = 404; //i18next.t([`error.${code}`, 'error.unknown'], { lng: 'en' })

// Interpolation
// pass through dynamic values using double curly braces
// values are escaped to mitigate attacks <i> -> &lt

// Plurasiation
// using different values based on counts
// can also handle languages with multiple plural forms

// Formatting based on the intl api
// formatting is done based on language set

i18next.init({
  fallbackLng: 'en',
  fallbackNS: 'common',
  resources: {
    en: {
      translation: {
        // use interpolation with it handle as a plural form
        key: '{{what}} is {{how}}',
        cake_one: 'a cake',
        cake_other:
          ' {{count, number(minimumFractionDigits: 6)}} cakes {{where, uppercase}}',
        // can add other formats such as minimum fraction digits or custom formats
        cake_zero: 'no cake', // can also handle 0 values
        // using context can differ translations based on dessert type
        dessert_cake: 'I like to eat cake',
        dessert_muffin: 'I like to eat muffins',
        dessert: 'I like the base key',
      },
    },
    ar: {
      // can handle languages with multiple plural forms
      translation: {
        cake_one: 'a cake',
        cake_two: 'two cake',
        cake_few: 'few cake',
        cake_many: 'many cake',
      },
    },
  },
});

// can add a custom format function

i18next.services.formatter.add('uppercase', (value, lng, options) => {
  return value.toUpperCase();
});

console.log(i18next.t('cake', { count: 101000.23, where: 'here', lng: 'de' }));
// you can combine interpolation context and plurals together
console.log(i18next.t('dessert', { context: 'muffin', lng: 'en' }));
