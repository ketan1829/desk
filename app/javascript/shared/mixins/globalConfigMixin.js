export default {
  methods: {
    useInstallationName(str = 'Book|Keeper Help Center', installationName) {
      return str.replace(/Chatwoot/g, installationName);
    },
  },
};
