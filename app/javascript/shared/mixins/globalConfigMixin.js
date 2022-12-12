export default {
  methods: {
    useInstallationName(str = '', installationName='Aligned') {
      return str.replace(/Aligned/g, installationName);
      // return "Aligned";
    },
  },
};
