async function includeHTML(id, url) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      el.innerHTML = html;
    } catch (error) {
      console.error('Error loading', url, ':', error);
      // Fallback: try relative path
      try {
        const fallbackResponse = await fetch(url.replace('/', './'));
        const fallbackHtml = await fallbackResponse.text();
        el.innerHTML = fallbackHtml;
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  includeHTML("header", "./partials/header.html");
  includeHTML("footer", "./partials/footer.html");
});
