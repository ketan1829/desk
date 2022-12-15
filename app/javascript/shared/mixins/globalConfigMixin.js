export default {
  methods: {
    useInstallationName(str = 'LifeelSpace', installationName) {
      return str.replace(/Chatwoot/g, installationName);
    },
  },
};
