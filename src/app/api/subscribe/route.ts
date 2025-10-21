// app/api/subscribe/route.ts

// app/api/subscribe/route.js
// eslint-disable-next-line import/prefer-default-export

import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, website, listID, tag, language } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
      });
    }

    if (!listID) {
      return new Response(JSON.stringify({ error: 'List ID is required' }), {
        status: 400,
      });
    }

    if (!tag) {
      return new Response(JSON.stringify({ error: 'Tag is required' }), {
        status: 400,
      });
    }

    // Replace with your AC account URL
    const apiUrl = 'https://boostifai.api-us1.com';
    const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
      });
    }
    // Create the contact in ActiveCampaign
    const response = await fetch(`${apiUrl}/api/3/contact/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': apiKey,
      },
      body: JSON.stringify({
        contact: {
          email,
          firstName: name || '',
          tags: [tag],
          fieldValues: [
            {
              field: '2',
              value: website || '',
            },
            {
              field: '15',
              value: language || 'English',
            },
          ],
        },
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      // Removed console.error(data);
      return new Response(JSON.stringify({ error: 'Failed to add contact' }), {
        status: 500,
      });
    }

    // Trigger automation by adding to list
    const contactId = data.contact.id;
    const response2 = await fetch(`${apiUrl}/api/3/contactLists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': apiKey,
      },
      body: JSON.stringify({
        contactList: {
          list: listID,
          contact: contactId,
          status: 1, // 1 = subscribed
        },
      }),
    });

    if (!response2.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to add contact to list' }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Removed console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}

// import type { NextRequest } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email } = await req.json();

//     if (!email) {
//       return new Response(JSON.stringify({ error: 'Email is required' }), {
//         status: 400,
//       });
//     }

//     // Replace with your AC account URL
//     const apiUrl = 'https://boostifai.api-us1.com';
//     const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;

//     // Create the contact in ActiveCampaign
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Api-Token': apiKey || '',
//       },
//       body: JSON.stringify({
//         contact: {
//           email,
//           firstName: name || '',
//           tags: 'ebook_request',
//         },
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       return new Response(JSON.stringify({ error: 'Failed to add contact' }), {
//         status: 500,
//       });
//     }

//     // Optionally, trigger automation by adding to list
//     const contactId = data.contact.id;
//     await fetch(`${apiUrl}/${contactId}/contactLists`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Api-Token': apiKey || '',
//       },
//       body: JSON.stringify({
//         contactList: {
//           list: '1', // replace with your ActiveCampaign list ID
//           status: 1, // 1 = subscribed
//         },
//       }),
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Server error' }), {
//       status: 500,
//     });
//   }
// }
