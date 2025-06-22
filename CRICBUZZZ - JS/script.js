const apiKey = "14111694bbmshdd2ab4586442a76p1a3f22jsn8271945cee3f";
const apiHost = "cricbuzz-cricket.p.rapidapi.com";
const content = document.getElementById("content");

// Generic API fetcher using async/await
async function fetchData(endpoint) {
  content.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://${apiHost}${endpoint}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    displayData(endpoint, data);
  } catch (error) {
    content.innerHTML = "❌ Error fetching data. Try again later.";
    console.error("Fetch error:", error);
  }
}

// Show Matches and Series
function showMatches() {
  fetchData("/matches/v1/live");
}

function showSeries() {
  fetchData("/series/v1");
}

// Display function for both matches and series
function displayData(endpoint, data) {
  content.innerHTML = ""; // Clear previous content

  if (endpoint.includes("matches")) {
    data.typeMatches?.forEach(section => {
      section.seriesMatches?.forEach(series => {
        const seriesName = series.seriesAdWrapper?.seriesName || "Unknown Series";
        const matches = series.seriesAdWrapper?.matches || [];

        const matchList = matches.map(match => {
          const team1 = match.matchInfo?.team1?.teamName || "Team 1";
          const team2 = match.matchInfo?.team2?.teamName || "Team 2";
          const status = match.matchInfo?.status || "Status unknown";
          return `<li>${team1} vs ${team2} — <strong>${status}</strong></li>`;
        }).join("");

        content.innerHTML += `<h3>${seriesName}</h3><ul>${matchList}</ul>`;
      });
    });
  }

  else if (endpoint.includes("series")) {
    const seriesList = data.seriesMapProto?.flatMap(item => item.series || []);
    seriesList.forEach(ser => {
      const name = ser?.seriesName || "Unnamed Series";
      content.innerHTML += `<p>📅 ${name}</p>`;
    });
  }
}
