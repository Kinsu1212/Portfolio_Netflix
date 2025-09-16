// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    allContactmes {
      profile
      name
      title
      summary
      companyuniversity
      linkedin
      email
      phonenumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe | null> {
  const data = await datoCMSClient.request<{ allContactmes: ContactMe[] }>(GET_CONTACT_ME);
  return data.allContactmes.length > 0 ? data.allContactmes[0] : null;
}
