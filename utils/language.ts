// https://levelup.gitconnected.com/a-simple-next-js-frontend-for-a-multilingual-website-ae31a17387e2
// https://github.com/timrijkse/nextjs-multilanguage.git
// https://github.com/timrijkse/nextjs-multilanguage

// interface Props {
//     lang: string;
//     langs: string[];
// }

export const fallbackLanguage: string = 'en';

// export const languages: string[] = [
// 	'en', // english**
// 	'es', // spanish**
// 	'ko', // korean**
// 	'hi', // hindi**
// 	'de', // german
// 	'pl', // polish**
// 	'fr', // french
// 	'zh', // chinese
// 	'it', // italian
// 	'ja', // japanese
// 	'ru', // russian
// 	'pt', // portuguese
// 	'nl', // dutch
// 	'da', // danish
// 	'af' // afrikaans
// ];

// // https://www.w3schools.com/tags/ref_language_codes.asp

// export const validateLanguage = ({ lang }: Props) => {
// 	return languages.includes(lang ? lang : fallbackLanguage);
// };

// export const getLanguage = ({ lang, langs }: Props) => {
//     let language: Props = lang.match(/[a-zA-z\-]{2,10}/g)?[0];
//     language = langs.split("-")[0];
//     return validateLanguage(language);
// };
