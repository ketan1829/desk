export default {
  methods: {
    useInstallationName(str = '', installationName) {
      return str.replace(/Aligned/g, installationName);
      // return "Aligned";
    },
  },
};
