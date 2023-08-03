const {
  API_CHANNEL_NAME: apiChannelName,
  API_CHANNEL_THUMBNAIL: apiChannelThumbnail,
  APP_VERSION: appVersion,
  AZURE_APP_ID: azureAppId,
  BRAND_NAME: brandName,
  CHATWOOT_INBOX_TOKEN: chatwootInboxToken,
  CSML_EDITOR_HOST: csmlEditorHost,
  CREATE_NEW_ACCOUNT_FROM_DASHBOARD: createNewAccountFromDashboard,
  DIRECT_UPLOADS_ENABLED: directUploadsEnabled,
  DISPLAY_MANIFEST: displayManifest,
  GIT_SHA: gitSha,
  HCAPTCHA_SITE_KEY: hCaptchaSiteKey,
  INSTALLATION_NAME: installationName,
  LOGO_THUMBNAIL: logoThumbnail,
  LOGO: logo,
  PRIVACY_URL: privacyURL,
  TERMS_URL: termsURL,
  WIDGET_BRAND_URL: widgetBrandURL,
  DISABLE_USER_PROFILE_UPDATE: disableUserProfileUpdate,
  DEPLOYMENT_ENV: deploymentEnv,
} = window.globalConfig || {};

const state = {
  apiChannelName,
  apiChannelThumbnail,
  appVersion,
  azureAppId,
  brandName: 'Book|Keeper Help Center',
  chatwootInboxToken,
  csmlEditorHost,
  deploymentEnv,
  createNewAccountFromDashboard,
  directUploadsEnabled: directUploadsEnabled === 'true',
  disableUserProfileUpdate: disableUserProfileUpdate === 'true',
  displayManifest: false,
  gitSha,
  hCaptchaSiteKey,
  installationName: 'Book|Keeper Help Center',
  logo,
  logoThumbnail,
  privacyURL: 'https://www.aspen-cap.com/',
  termsURL: 'https://www.aspen-cap.com/',
  widgetBrandURL,
};

export const getters = {
  get: $state => $state,
  isOnChatwootCloud: $state => $state.deploymentEnv === 'cloud',
  isACustomBrandedInstance: $state => $state.installationName !== 'Chatwoot',
};

export const actions = {};

export const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
