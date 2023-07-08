document.addEventListener("DOMContentLoaded", function () {
  const candidateList = document.getElementById("candidate-list");
  const searchForm = document.getElementById("search-form");

  const candidates = [
    { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", jobRole: "UI Designer" },
    { name: "Michael Johnson", location: "London", jobRole: "Project Manager" },
    {
      name: "Emily Brown",
      location: "Sydney",
      jobRole: "Marketing Specialist",
    },
  ];

  displayCandidates(candidates);

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const locationInput = document.getElementById("location");
    const jobRoleInput = document.getElementById("job-role");

    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleInput.value.toLowerCase();

    const filteredCandidates = candidates.filter(function (candidate) {
      const candidateLocation = candidate.location.toLowerCase();
      const candidateJobRole = candidate.jobRole.toLowerCase();

      return (
        candidateLocation.includes(location) &&
        candidateJobRole.includes(jobRole)
      );
    });

    displayCandidates(filteredCandidates);

    // Clear search input fields
    locationInput.value = "";
    jobRoleInput.value = "";
  });

  function displayCandidates(candidates) {
    candidateList.innerHTML = "";

    candidates.forEach(function (candidate) {
      const candidateItem = document.createElement("li");
      candidateItem.innerHTML = `
        <h3>${candidate.name}</h3>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
      `;

      candidateList.appendChild(candidateItem);
    });
  }
});
