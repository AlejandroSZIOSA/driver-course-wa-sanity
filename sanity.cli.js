import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID, //fix problem
    dataset: import.meta.env.SANITY_STUDIO_DATASET, //fix problem
    token: import.meta.env.SANITY_API_TOKEN, // Add token
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
