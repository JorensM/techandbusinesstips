export async function POST(request: Request) {
    const data = await request.json();
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + process.env.MAILERLITE_API_KEY
        },
        body: JSON.stringify({
          'email': data.email,
          'groups': [
            '145255370899588419'
          ]
        })
    })
    return res;
}