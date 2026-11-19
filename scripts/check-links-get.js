/** Follow-up GET checks for links that failed HEAD. */
(async () => {
  const urls = [
    "https://www.linkedin.com/in/aakashcse2027/",
    "https://aakashimportant15-max-hireflow-app-jhoc1s.streamlit.app",
    "https://covenant-ai-brand-guardian.streamlit.app/",
    "https://docket-jw6s.onrender.com/gallery",
    "https://github.com/aakashimportant15-max/CropGuard",
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(60000),
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
        },
      });
      console.log("GET", res.status, url);
    } catch (e) {
      console.log("GET FAIL", url, "-", e.message);
    }
  }
})();
