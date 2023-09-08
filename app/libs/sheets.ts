import { google } from 'googleapis';

export async function getTripData(city: string) {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      null,
      (process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: city,
    });

    const columns = response.data.values;
    return columns
  } catch (err) {
    console.log(err);
  }
  return [];
}