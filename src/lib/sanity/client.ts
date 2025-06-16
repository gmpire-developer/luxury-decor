import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'd7cf527v',  // from /luxury-decor project
  dataset: 'production',
  apiVersion: '2025-06-15',
  useCdn: false, // IMPORTANT: for write operations
  token: process.env.SANITY_API_TOKEN, // you must add this token
});