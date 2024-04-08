// Search.stories.js
import React from 'react';
import Search from './index';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';

// Algolia credentials (replace with your own for testing)
const algoliaAppId = 'YourAlgoliaAppId';
const algoliaSearchKey = 'YourAlgoliaSearchApiKey';
const searchClient = algoliasearch(algoliaAppId, algoliaSearchKey);

export default {
  title: 'Search/SearchComponent',
  component: Search,
  decorators: [
    (Story) => (
      <InstantSearch searchClient={searchClient} indexName="repos_data">
        <Story />
      </InstantSearch>
    ),
  ],
};

export const Default = () => <Search promoCardText="Explore the top repositories!" />;