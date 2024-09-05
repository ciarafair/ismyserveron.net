require('dotenv').config();
const axios = require('axios');

// Load environment variables
const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_PAGES_PROJECT_NAME = process.env.CF_PAGES_PROJECT_NAME;

async function deleteDeployments() {
  try {
    // Fetch the list of deployments
    const deployments = await axios.get(
      `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PAGES_PROJECT_NAME}/deployments`,
      {
        headers: {
          Authorization: `Bearer ${CF_API_TOKEN}`,
        },
      }
    );

    // Iterate through the deployments and delete each one
    for (const deployment of deployments.data.result) {
      const deploymentId = deployment.id;
      console.log(`Deleting deployment ID: ${deploymentId}`);

      await axios.delete(
        `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PAGES_PROJECT_NAME}/deployments/${deploymentId}`,
        {
          headers: {
            Authorization: `Bearer ${CF_API_TOKEN}`,
          },
        }
      );
    }

    console.log('All deployments deleted successfully.');
  } catch (error) {
    console.error('Error deleting deployments:', error.response.data);
  }
}

deleteDeployments();
