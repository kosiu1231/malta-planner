export default function handler(request, response) {
  // Ten kod uruchamia się na serwerach Vercel, nie w przeglądarce
  response.status(200).json({
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  });
}