export default {
  methods: {
    useInstallationName(str = 'Choira', installationName) {
      return str.replace(/Chatwoot/g, installationName);
    },
  },
};
