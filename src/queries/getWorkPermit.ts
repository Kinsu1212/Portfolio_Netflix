// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';

const GET_WORK_PERMIT = `
  query {
    workpermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  const data = await datoCMSClient.request<{ workpermit: WorkPermit }>(GET_WORK_PERMIT);
  return data.workpermit;
}
