import { GraphQLClient } from 'graphql-request';

const DATO_CMS_ENDPOINT = process.env.REACT_APP_DATOCMS_API_URL!;
const DATO_CMS_API_TOKEN = process.env.REACT_APP_DATOCMS_API_TOKEN!;

const datoCMSClient = new GraphQLClient(DATO_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${DATO_CMS_API_TOKEN}`,
  },
});

export default datoCMSClient;

