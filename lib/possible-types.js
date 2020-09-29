import { fetchAPI } from 'lib/api';
const fetch = require('cross-fetch');
const fs = require('fs');
// @jlovejo2 see https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically
// attempting to auto-generate graphql-introspection queries into a possibleTypes config object
const possibleTypes = fetch(`${process.env.WORDPRESS_API_URL}`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		variables: {},
		query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
	})
})
	.then(result => result.json())
	.then(result => {
		const possibleTypes = {};

		result.data.__schema.types.forEach(supertype => {
			if (supertype.possibleTypes) {
				possibleTypes[supertype.name] = supertype.possibleTypes.map(
					subtype => subtype.name
				);
			}
		});

		fs.writeFile('./possibleTypes.json', JSON.stringify(possibleTypes), err => {
			if (err) {
				console.error('Error writing possibleTypes.json', err);
			} else {
				console.log('Fragment types successfully extracted!');
			}
		});
	});

export default possibleTypes;
