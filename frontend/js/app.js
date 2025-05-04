document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'http://localhost:3000/incidents';
    const incidentForm = document.getElementById('incidentForm');
    const incidentsList = document.getElementById('incidentsList');
    
    // Load incidents when page loads
    loadIncidents();
    
    // Handle form submission
    incidentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const severity = document.getElementById('severity').value;
      
      const incident = {
        title,
        description,
        severity
      };
      
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incident),
      })
      .then(response => response.json())
      .then(data => {
        loadIncidents();
        incidentForm.reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
    
    // Load all incidents
    function loadIncidents() {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          displayIncidents(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
    // Display incidents in the UI
    function displayIncidents(incidents) {
      incidentsList.innerHTML = '';
      
      if (incidents.length === 0) {
        incidentsList.innerHTML = '<p>No incidents reported yet.</p>';
        return;
      }
      
      incidents.forEach(incident => {
        const incidentCard = document.createElement('div');
        incidentCard.className = 'incident-card';
        
        const severityClass = `severity-${incident.severity.toLowerCase()}`;
        
        incidentCard.innerHTML = `
          <h3>${incident.title}</h3>
          <p>${incident.description}</p>
          <div>
            <span class="severity ${severityClass}">${incident.severity}</span>
            <span class="date">Reported at: ${new Date(incident.reported_at).toLocaleString()}</span>
          </div>
          <button class="delete-btn" data-id="${incident.id}">Delete</button>
        `;
        
        incidentsList.appendChild(incidentCard);
      });
      
      // Add event listeners to delete buttons
      document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          deleteIncident(id);
        });
      });
    }
    
    // Delete an incident
    function deleteIncident(id) {
      if (confirm('Are you sure you want to delete this incident?')) {
        fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          loadIncidents();
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    }
  });