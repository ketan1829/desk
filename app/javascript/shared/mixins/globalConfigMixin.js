export default {
  methods: {
    useInstallationName(str = '', installationName) {
      return str.replace(/chatwoot/g, installationName);
    },
  },
};
