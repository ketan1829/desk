export default {
  methods: {
    useInstallationName(str = '', installationName='Aligned') {
      return str.replace(/Chatwoot/g, installationName);
      // return "Aligned";
    },
  },
};
