export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const response = await fetch(`${process.env.PMEI_API_BASE}/latest_memory`, {
      headers: { "X-API-KEY": process.env.API_KEY },
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
