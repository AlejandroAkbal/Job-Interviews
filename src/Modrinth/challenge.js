(async () => {
  // Input, could be a window.prompt()
  const modSlug = 'modmenu';

  const apiUrl = `https://api.modrinth.com`;

  let projectData;

  try {
    projectResponse = await fetch(`${apiUrl}/v2/project/${modSlug}`);

    projectData = await projectResponse.json();
  } catch (error) {
    console.error(`Error fetching project: ${error}`);
    return;
  }

  console.log(projectData.downloads);
})();

// This did not fit in the form, its just a suggestion I had in mind:
// A thing I would improve on Modrinth, is to add a rating system. Useful to decide what to play next, because a modpack can seem great from its description, but prove difficult to play.
